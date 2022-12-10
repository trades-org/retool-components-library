import { DropResult } from "react-beautiful-dnd";
export interface ColumnType {
    id: string;
    content: string;
    rowIds: string[];
}
export interface RowType {
    id: string;
    content: string;
    img?: string;
    tags?: string[];
}
export interface ColumnClassNamesType {
    columnTitleClassNames?: string;
    columnTitleWrapperClassNames?: string;
    columnListClassNames?: string;
}
export interface RowClassNamesType {
    rowContentClassNames?: string;
    rowImageClassNames?: string;
    rowWrapperClassNames?: string;
    rowTagsWrapperClassNames?: string;
    rowTagsClassNames?: string;
}
export interface DragAndDropStateType {
    columns: {
        [key: string]: ColumnType;
    };
    rows: {
        [key: string]: RowType;
    };
    columnOrder: string[];
}
export default interface DragAndDropProps {
    data: DragAndDropStateType;
    wrapperClassNames?: string;
    columnClassNames?: ColumnClassNamesType;
    rowClassNames?: RowClassNamesType;
    isDragColumnsEnabled?: boolean;
    onClickRow?: (row: RowType) => void;
    onDragEnd?: (result: DropResult) => void;
}
export interface InnerColumnProps {
    column: ColumnType;
    index: number;
    rowsMap: {
        [key: string]: RowType;
    };
    columnClassNames?: ColumnClassNamesType;
    rowClassNames?: RowClassNamesType;
    isDragColumnsEnabled?: boolean;
    onClickRow?: (row: RowType) => void;
}
export interface ColumnProps extends ColumnClassNamesType {
    column: ColumnType;
    index: number;
    rows: RowType[];
    rowClassNames?: RowClassNamesType;
    isDragColumnsEnabled?: boolean;
    onClickRow?: (row: RowType) => void;
}
export interface InnerRowProps {
    rows: RowType[];
    rowClassNames?: RowClassNamesType;
    onClickRow?: (row: RowType) => void;
}
export interface RowProps extends RowClassNamesType {
    row: RowType;
    index: number;
    onClickRow?: (row: RowType) => void;
}
