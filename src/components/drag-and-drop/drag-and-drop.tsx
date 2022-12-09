import React, { FC, useState } from "react";
import DragAndDropProps from "./drag-and-drop.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const DragAndDrop: FC<DragAndDropProps> = ({}) => {
  const [data, setData] = useState<any>([
    {
      slug: "1",
      title: "Test 1",
    },
    {
      slug: "2",
      title: "Test 2",
    },
    {
      slug: "3",
      title: "Test 3",
    },
  ]);
  // a little function to help us with reordering the result
  const reorder = (list : any, startIndex : any, endIndex : any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(data, result.source.index, result.destination.index);

    setData(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {data.map((item: any, index: number) => (
              <Draggable key={item.slug} draggableId={item.slug} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
