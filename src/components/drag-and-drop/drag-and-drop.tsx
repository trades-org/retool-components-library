import React, { FC, useState } from "react";
import DragAndDropProps from "./drag-and-drop.types";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import InnerColumnList from "./inner-columns";

const DragAndDrop: FC<DragAndDropProps> = ({ data }) => {
  const [dataState, setDataState] = useState(data);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);

      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        columnOrder: newColumnOrder,
      };

      setDataState(newState);

      return;
    }

    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

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
        ...data,
        columns: {
          ...data.columns,
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
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setDataState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-[500px]"
          >
            {dataState.columnOrder.map((columnId, index) => {
              const column = dataState.columns[columnId];

              return (
                <InnerColumnList
                  key={column.id}
                  column={column}
                  index={index}
                  rowsMap={dataState.rows}
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
