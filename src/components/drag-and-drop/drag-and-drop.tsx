import React, { FC, useState } from "react";
import DragAndDropProps from "./drag-and-drop.types";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import InnerColumnList from "./inner-columns";
import { twMerge } from "tailwind-merge";

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

  const wrapperMergedClassNames = twMerge(
    "p-4 flex flex-row space-x-4",
    wrapperClassNames
  );

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (onDragEnd) {
      onDragEnd(result);
    }

    if (type === "column") {
      const newColumnOrder = Array.from(dataState.columnOrder);
      newColumnOrder.splice(source.index, 1);

      newColumnOrder.splice(destination.index, 0, draggableId);
      console.log({ newColumnOrder });

      const newState = {
        ...dataState,
        columnOrder: newColumnOrder,
      };

      setDataState(newState);

      return;
    }

    const startColumn = dataState.columns[source.droppableId];
    const finishColumn = dataState.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newRowIds = Array.from(startColumn.rowIds);

      // Remove Item
      newRowIds.splice(source.index, 1);
      // Insert Item again
      newRowIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        rowIds: newRowIds,
      };

      const newState = {
        ...dataState,
        columns: {
          ...dataState.columns,
          [newColumn.id]: newColumn,
        },
      };

      setDataState(newState);
      return;
    }

    // Moving from one list to another
    const startRowIds = Array.from(startColumn.rowIds);
    startRowIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      rowIds: startRowIds,
    };

    const finishRowIds = Array.from(finishColumn.rowIds);
    finishRowIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      rowIds: finishRowIds,
    };

    const newState = {
      ...dataState,
      columns: {
        ...dataState.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setDataState(newState);

  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
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
