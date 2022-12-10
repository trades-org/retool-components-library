import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { twMerge } from "tailwind-merge";
import { RowProps } from "./drag-and-drop.types";

const Row: FC<RowProps> = ({
  row,
  index,
  rowWrapperClassNames,
  rowContentClassNames,
  rowImageClassNames,
  rowTagsClassNames,
  rowTagsWrapperClassNames,
  onClickRow
}) => {
  const rowWrapperMergedClassNames = twMerge("p-2 flex rounded bg-white", rowWrapperClassNames);
  const rowImageMergedClassNames = twMerge(
    "mr-2 rounded-full h-12 w-12",
    rowImageClassNames
  );
  const rowContentMergedClassNames = twMerge(
    "pb-1 text-sm",
    rowContentClassNames
  );
  const rowTagsWrapperMergedClassNames = twMerge(
    "py-1",
    rowTagsWrapperClassNames
  );
  const rowTagsMergedClassNames = twMerge(
    "inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2",
    rowTagsClassNames
  );
  return (
    <Draggable draggableId={row.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${rowWrapperMergedClassNames} ${ snapshot.isDragging ? 'shadow-md' : ''} }`}
          onClick={() =>  onClickRow && onClickRow(row)}
        >
          {row.img && (
            <img
              src={row.img}
              alt={row.content}
              className={rowImageMergedClassNames}
            />
          )}
          <div>
            <p className={rowContentMergedClassNames}>{row.content}</p>
            {/* Tags */}
            {row?.tags?.length && (
              <div className={rowTagsWrapperMergedClassNames}>
                {row.tags.map((tag, index) => (
                  <span
                    key={`${row.id}-${index}-tags`}
                    className={rowTagsMergedClassNames}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Row;
