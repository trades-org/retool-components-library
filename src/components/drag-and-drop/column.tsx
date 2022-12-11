import React, { FC } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ColumnProps } from "./drag-and-drop.types";
import InnerRows from "./inner-rows";
import { twMerge } from "tailwind-merge";

const Column: FC<ColumnProps> = ({
  column,
  index,
  rows,
  columnTitleClassNames,
  columnTitleWrapperClassNames,
  columnListClassNames,
  rowClassNames,
  isDragColumnsEnabled,
  onClickRow,

  multiSelect,
}) => {
  const columnTitleMergedClassNames = twMerge(
    "p-2 font-bold",
    columnTitleClassNames
  );

  const columnTitleWrapperMergedClassNames = twMerge(
    "w-[250px]",
    columnTitleWrapperClassNames
  );

  const columnListMergedClassNames = twMerge(
    "p-2 min-h-[200px]",
    columnListClassNames
  );

  return (
    <Draggable
      draggableId={column.id}
      index={index}
      isDragDisabled={!isDragColumnsEnabled}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={columnTitleWrapperMergedClassNames}
        >
          <div
            {...provided.dragHandleProps}
            className={columnTitleMergedClassNames}
          >
            {column.content}
          </div>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={columnListMergedClassNames}
              >
                <InnerRows
                  rows={rows}
                  rowClassNames={rowClassNames}
                  onClickRow={onClickRow}
                  multiSelect={multiSelect}
                />
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
