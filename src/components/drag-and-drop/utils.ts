import { DraggableLocation } from "react-beautiful-dnd";
import {
  ColumnType,
  DragAndDropStateType,
  RowType,
} from "./drag-and-drop.types";

export const reorder = (
  list: string[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

interface MutliDragAwareReorderProps {
  data: DragAndDropStateType;
  selectedRowIds: string[];
  source: DraggableLocation;
  destination: DraggableLocation;
}
interface Reorder {
  (props: MutliDragAwareReorderProps): {
    data: DragAndDropStateType;
    selectedRowIds: string[];
  };
}

interface WithInsertedProps {
  column: ColumnType;
  insertAtIndex: number;
  orderedSelectedRowIds: string[];
}
interface WithInserted {
  (props: WithInsertedProps): string[];
}

interface GetInsertAtIndexProps {
  dragged: string;
  data: DragAndDropStateType;
  destination: DraggableLocation;
  selectedRowIds: string[];
}

interface GetInsertAtIndex {
  (props: GetInsertAtIndexProps): number;
}

export const mutliDragAwareReorder: Reorder = (props) => {
  if (props.selectedRowIds.length > 1) {
    return reorderMultiDrag(props);
  }
  return reorderSingleDrag(props);
};

const reorderSingleDrag: Reorder = ({
  data,
  selectedRowIds,
  source,
  destination,
}) => {
  // moving in the same list
  if (source.droppableId === destination.droppableId) {
    const column = data.columns[source.droppableId];
    const reordered = reorder(column.rowIds, source.index, destination.index);

    const updated = {
      ...data,
      columns: {
        ...data.columns,
        [column.id]: withNewRowIds(column, reordered),
      },
    };

    return {
      data: updated,
      selectedRowIds,
    };
  }

  // moving to a new list
  const home = data.columns[source.droppableId];
  const foreign = data.columns[destination.droppableId];

  // the id of the row to be moved
  const rowId = home.rowIds[source.index];

  // remove from home column
  const newHomeRowIds = [...home.rowIds];
  newHomeRowIds.splice(source.index, 1);

  // add to foreign column
  const newForeignRowIds = [...foreign.rowIds];
  newForeignRowIds.splice(destination.index, 0, rowId);

  const updated = {
    ...data,
    columns: {
      ...data.columns,
      [home.id]: withNewRowIds(home, newHomeRowIds),
      [foreign.id]: withNewRowIds(foreign, newForeignRowIds),
    },
  };

  return {
    data: updated,
    selectedRowIds,
  };
};

const reorderMultiDrag: Reorder = ({
  data,
  selectedRowIds,
  destination,
  source,
}) => {
  const columnStart = data.columns[source.droppableId];
  const dragged = columnStart.rowIds[source.index];
  const insertAtIndex = getInsertAtIndex({
    data,
    selectedRowIds,
    destination,
    dragged,
  });

  const orderedSelectedRowIds = [...selectedRowIds];
  orderedSelectedRowIds.sort((a, b) => {
    // moving the dragged item to the top of the list
    if (a === dragged) {
      return -1;
    }
    if (b === dragged) {
      return 1;
    }

    // sorting by their natural indexes
    const columnForA = getHomeColumn(data, a);
    const columnForB = getHomeColumn(data, b);
    if (columnForA && columnForB) {
      const indexOfA = columnForA.rowIds?.indexOf(a);
      const indexOfB = columnForB.rowIds?.indexOf(b);

      if (indexOfA !== indexOfB) {
        return indexOfA - indexOfB;
      }
    }

    // sorting by their order in the selectedRowIds list
    return -1;
  });

  const withRemovedRows = data.columnOrder.reduce((previous, columnId) => {
    const column = data.columns[columnId];
    const remainingRowIds = column.rowIds.filter(
      (id) => !selectedRowIds.includes(id)
    );

    previous[column.id] = withNewRowIds(column, remainingRowIds);
    return previous;
  }, data.columns);

  const columnFinal = withRemovedRows[destination.droppableId];
  const inserted = withInserted({
    column: columnFinal,
    insertAtIndex,
    orderedSelectedRowIds,
  });

  const withAddedRows = {
    ...withRemovedRows,
    [columnFinal.id]: withNewRowIds(columnFinal, inserted),
  };

  const updated = {
    ...data,
    columns: withAddedRows,
  };

  return {
    data: updated,
    selectedRowIds: orderedSelectedRowIds,
  };
};

const withNewRowIds = (column: ColumnType, rowIds: string[]) => ({
  id: column.id,
  content: column.content,
  rowIds,
});

const withInserted: WithInserted = ({
  column,
  insertAtIndex,
  orderedSelectedRowIds,
}) => {
  const base = [...column.rowIds];
  base.splice(insertAtIndex, 0, ...orderedSelectedRowIds);
  return base;
};

export const getHomeColumn = (data: DragAndDropStateType, rowId: string) => {
  const columnId = data.columnOrder.find((id) => {
    const column = data.columns[id];
    return column.rowIds.includes(rowId);
  });
  if (columnId) {
    return data.columns[columnId];
  }
  return null;
};

const getInsertAtIndex: GetInsertAtIndex = ({
  dragged,
  data,
  destination,
  selectedRowIds,
}) => {
  const destinationIndexOffset = selectedRowIds.reduce((previous, current) => {
    if (current === dragged) {
      return previous;
    }

    const final = data.columns[destination.droppableId];
    const column = getHomeColumn(data, current);

    if (column !== final) {
      return previous;
    }

    const index = column.rowIds.indexOf(current);

    if (index >= destination.index) {
      return previous;
    }

    // the selected item is before the destination index
    // we need to account for this when inserting into the new location
    return previous + 1;
  }, 0);

  const result = destination.index - destinationIndexOffset;
  return result;
};

export const multiSelectTo = (
  data: DragAndDropStateType,
  selectedRowIds: string[],
  newRowId: string
) => {
  // Nothing already selected
  if (!selectedRowIds.length) {
    return [newRowId];
  }

  const columnOfNew = getHomeColumn(data, newRowId);

  const lastSelected = selectedRowIds[selectedRowIds.length - 1];
  const columnOfLast = getHomeColumn(data, lastSelected);

  if (!columnOfNew || !columnOfLast) {
    return null;
  }

  const indexOfNew = columnOfNew.rowIds.indexOf(newRowId);
  const indexOfLast = columnOfLast.rowIds.indexOf(lastSelected);

  // multi selecting to another column
  // select everything up to the index of the current item
  if (columnOfNew !== columnOfLast) {
    return columnOfNew.rowIds.slice(0, indexOfNew + 1);
  }

  // multi selecting in the same column
  // need to select everything between the last index and the current index inclusive

  // nothing to do here
  if (indexOfNew === indexOfLast) {
    return null;
  }

  const isSelectingForwards = indexOfNew > indexOfLast;
  const start = isSelectingForwards ? indexOfLast : indexOfNew;
  const end = isSelectingForwards ? indexOfNew : indexOfLast;

  const inBetween = columnOfNew.rowIds.slice(start, end + 1);

  // everything inbetween needs to have it's selection toggled.
  // with the exception of the start and end values which will always be selected

  const toAdd = inBetween.filter((rowId) => {
    // if already selected: then no need to select it again
    return selectedRowIds.includes(rowId) ? false : true;
  });

  const sorted = isSelectingForwards ? toAdd : [...toAdd].reverse();
  const combined = [...selectedRowIds, ...sorted];

  return combined;
};
