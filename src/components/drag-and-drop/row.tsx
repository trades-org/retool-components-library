import React, { FC, MouseEvent } from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
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

  rowWrapperGhostingClassNames,
  rowWrapperSelectedClassNames,  

  onClickRow,

  isSelected,
  isGhosting,
  selectionCount,
  toggleSelection,
  toggleSelectionInGroup,
  multiSelectTo,
}) => {
  const rowWrapperGhostingMergedClassNames = twMerge(
    "opacity-10",
    rowWrapperGhostingClassNames,
  );
  const rowWrapperSelectedMergedClassNames = twMerge(
    "bg-blue-100",
    rowWrapperSelectedClassNames,
  );
  const rowWrapperMergedClassNames = twMerge(
    "p-2 flex rounded bg-white relative border",
    rowWrapperClassNames,
    isGhosting ? rowWrapperGhostingMergedClassNames : "",
    isSelected ? rowWrapperSelectedMergedClassNames : ""
  );
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

  const wasToggleInSelectionGroupKeyUsed = (
    event: React.MouseEvent | React.KeyboardEvent
  ) => {
    const isUsingWindows = navigator.userAgent.indexOf("Windows") >= 0;
    return isUsingWindows ? event.ctrlKey : event.metaKey;
  };

  const performAction = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (wasToggleInSelectionGroupKeyUsed(event)) {
      if (toggleSelectionInGroup) toggleSelectionInGroup(row.id);
      return;
    }
    // was MultiSelect KeyUsed
    if (event.shiftKey) {
      if (multiSelectTo) multiSelectTo(row.id);
      return;
    }

    if (onClickRow) onClickRow(row);
  };

  const onClick = (event: React.MouseEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.button !== 0) {
      return;
    }

    // marking the event as used
    event.preventDefault();

    performAction(event);
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    // marking the event as used
    // we would also need to add some extra logic to prevent the click
    // if this element was an anchor
    event.preventDefault();
    if (toggleSelectionInGroup) toggleSelectionInGroup(row.id);
  };

  const onKeyDown = (
    event: React.KeyboardEvent,
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot
  ) => {
    if (event.defaultPrevented) {
      return;
    }

    if (snapshot.isDragging) {
      return;
    }

    if (event.keyCode !== 13) {
      return;
    }

    // we are using the event for selection
    event.preventDefault();

    performAction(event);
  };

  return (
    <Draggable draggableId={row.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${rowWrapperMergedClassNames} ${
            snapshot.isDragging ? "shadow-md" : ""
          } }`}
          onClick={(event) => onClick(event)}
          onTouchEnd={(event) => onTouchEnd(event)}
          onKeyDown={(event) => onKeyDown(event, provided, snapshot)}
        >
          {snapshot.isDragging && (selectionCount || 0) > 1 ? (
            <div className="-top-2.5 -right-2.5 absolute w-5 h-5 rounded-full bg-slate-200 text-xs flex justify-center items-center">
              {selectionCount}
            </div>
          ) : null}
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
