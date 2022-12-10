import { DragAndDropState } from "../../src/components";
export const mockData: DragAndDropState = {
  rows: {
    "row-1": { id: "row-1", content: "Take out the garbage" },
    "row-2": { id: "row-2", content: "Watch my favorite show" },
    "row-3": { id: "row-3", content: "Charge my phone" },
    "row-4": { id: "row-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      content: "To do",
      rowIds: ["row-1", "row-2", "row-3", "row-4"],
    },
    "column-2": {
      id: "column-2",
      content: "In progress",
      rowIds: [],
    },
    "column-3": {
      id: "column-3",
      content: "Done",
      rowIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
