import { DragAndDropStateType } from "../../src/components";
export const mockData: DragAndDropStateType = {
  rows: {
    "row-1": {
      id: "row-1",
      content: "Aron perez",
      tags: ["san francisco"],
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
    },
    "row-2": {
      id: "row-2",
      content: "Marco polo",
      tags: ["san francisco"],
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
    },
    "row-3": {
      id: "row-3",
      content: "John doe",
      tags: ["san francisco"],
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
    },
    "row-4": {
      id: "row-4",
      content: "Kevin Hart",
      tags: ["san francisco"],
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      content: "Phase 1",
      rowIds: ["row-1", "row-2", "row-3", "row-4"],
    },
    "column-2": {
      id: "column-2",
      content: "Phase 2",
      rowIds: [],
    },
    "column-3": {
      id: "column-3",
      content: "Phase 3",
      rowIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
