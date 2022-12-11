import { DraggableLocation } from "react-beautiful-dnd";
import { ColumnType, DragAndDropStateType } from "./drag-and-drop.types";
export declare const reorder: (list: string[], startIndex: number, endIndex: number) => string[];
interface MutliDragAwareReorderProps {
    data: DragAndDropStateType;
    selectedRowIds: string[];
    source: DraggableLocation;
    destination: DraggableLocation;
}
interface Reorder {
    (props: MutliDragAwareReorderProps): {
        data: DragAndDropStateType;
        selectedRowIds: string[];
    };
}
export declare const mutliDragAwareReorder: Reorder;
export declare const getHomeColumn: (data: DragAndDropStateType, rowId: string) => ColumnType | null;
export declare const multiSelectTo: (data: DragAndDropStateType, selectedRowIds: string[], newRowId: string) => string[] | null;
export {};
