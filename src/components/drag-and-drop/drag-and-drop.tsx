import React, { FC, useEffect, useState } from "react";
import DragAndDropProps from "./drag-and-drop.types";
import {
  DragDropContext,
  DragStart,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import InnerColumnList from "./inner-columns";
import { twMerge } from "tailwind-merge";
import { mutliDragAwareReorder, multiSelectTo as multiSelect } from "./utils";

const DragAndDrop: FC<DragAndDropProps> = ({
  data,
  wrapperClassNames,
  columnClassNames,
  rowClassNames,
  isDragColumnsEnabled,
  onClickRow,
  onDragEnd,
}) => {
  const [dataState, setDataState] = useState(data);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);

  const wrapperMergedClassNames = twMerge(
    "p-4 flex flex-row space-x-4",
    wrapperClassNames
  );

  const handleOnDragStart = (start: DragStart) => {
    const id = start.draggableId;
    const selected = selectedRowIds.find((rowId) => rowId === id);
    if (!selected) {
      unselectAll();
    }
    setDraggingRowId(id);
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (
      !destination ||
      result.reason === "CANCEL" ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      setDraggingRowId(null);
      return;
    }

    if (onDragEnd) {
      onDragEnd(result);
    }

    if (type === "column") {
      const newColumnOrder = Array.from(dataState.columnOrder);
      newColumnOrder.splice(source.index, 1);

      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...dataState,
        columnOrder: newColumnOrder,
      };

      setDataState(newState);
      setSelectedRowIds([]);
      setDraggingRowId(null);

      return;
    }

    const processed = mutliDragAwareReorder({
      data: dataState,
      selectedRowIds: selectedRowIds,
      source,
      destination,
    });

    setDataState(processed.data);
    setSelectedRowIds(processed.selectedRowIds);
    setDraggingRowId(null);
    return;
  };

  const unselectAll = () => {
    setSelectedRowIds([]);
  };

  const multiSelectTo = (newRowId: string) => {
    const updated = multiSelect(dataState, selectedRowIds, newRowId);

    if (updated == null) {
      return;
    }

    setSelectedRowIds(updated);
  };

  const toggleSelectionInGroup = (rowId: string) => {
    const index = selectedRowIds.indexOf(rowId);

    // if not selected - add it to the selected items
    if (index === -1) {
      setSelectedRowIds([...selectedRowIds, rowId]);
      return;
    }

    // it was previously selected and now needs to be removed from the group
    const shallow = [...selectedRowIds];
    shallow.splice(index, 1);
    setSelectedRowIds(shallow);
  };
  const toggleSelection = (rowId: string) => {
    const wasSelected = selectedRowIds.includes(rowId);

    const newRowIds = () => {
      // Task was not previously selected
      // now will be the only selected item
      if (!wasSelected) {
        return [rowId];
      }

      // Task was part of a selected group
      // will now become the only selected item
      if (selectedRowIds.length > 1) {
        return [rowId];
      }

      // task was previously selected but not in a group
      // we will now clear the selection
      return [];
    };

    setSelectedRowIds(newRowIds());
  };

  const onWindowKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === "Escape") {
      unselectAll();
    }
  };

  const onWindowClick = (event: MouseEvent) => {
    if (event.defaultPrevented) {
      return;
    }
    unselectAll();
  };

  const onWindowTouchEnd = (event: TouchEvent) => {
    if (event.defaultPrevented) {
      return;
    }
    unselectAll();
  };

  useEffect(() => {
    window.addEventListener("keydown", onWindowKeyDown);
    window.addEventListener("click", onWindowClick);
    window.addEventListener("touchend", onWindowTouchEnd);
    return () => {
      window.removeEventListener("keydown", onWindowKeyDown);
      window.removeEventListener("click", onWindowClick);
      window.removeEventListener("touchend", onWindowTouchEnd);
    };
  }, []);

  return (
    <DragDropContext
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
    >
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={wrapperMergedClassNames}
          >
            {dataState.columnOrder.map((columnId, index) => {
              const column = dataState.columns[columnId];

              return (
                <InnerColumnList
                  onClickRow={onClickRow}
                  key={column.id}
                  column={column}
                  index={index}
                  rowsMap={dataState.rows}
                  columnClassNames={columnClassNames}
                  rowClassNames={rowClassNames}
                  isDragColumnsEnabled={isDragColumnsEnabled}
                  multiSelect={{
                    selectedRowIds,
                    draggingRowId: draggingRowId || undefined,
                    functions: {
                      toggleSelection,
                      toggleSelectionInGroup,
                      multiSelectTo,
                    },
                  }}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
