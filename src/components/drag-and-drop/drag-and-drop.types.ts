export interface ColumnType {
    id: string;
    content: string;
    rowIds: string[];
}

export interface RowType {
    id: string;
    content: string;
}

export interface DragAndDropState {
    columns: { [key: string]: ColumnType };
    rows: { [key: string]: RowType };
    columnOrder: string[];
}

export default interface DragAndDropProps {
    data: DragAndDropState;
}

export interface InnerColumnProps {
    column: ColumnType;
    index: number;
    rowsMap: { [key: string]: RowType };
}

export interface ColumnProps {
    column: ColumnType;
    index: number;
    rows: RowType[];
}

export interface InnerRowProps {
    rows: RowType[];
}

export interface RowProps {
    row: RowType;
    index: number;
}