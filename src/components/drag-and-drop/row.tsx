import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { RowProps } from "./drag-and-drop.types";

const Row : FC<RowProps> = ({ row, index }) => {
  return (
    <Draggable draggableId={row.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {row.content}
        </div>
      )}
    </Draggable>
  );
}

export default Row;