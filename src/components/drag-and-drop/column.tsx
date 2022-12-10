import React, { FC } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ColumnProps } from "./drag-and-drop.types";
import InnerRows from "./inner-rows";

const Column: FC<ColumnProps> = ({ column, index, rows }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div {...provided.dragHandleProps}>{column.content}</div>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <InnerRows rows={rows} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
