import React from "react";
import Column from "./column";
import { InnerColumnProps } from "./drag-and-drop.types";

const InnerColumnList = React.memo(function InnerColumnList({
  column,
  rowsMap,
  index,
  columnClassNames,
  rowClassNames,
  isDragColumnsEnabled,
  onClickRow,

  multiSelect
}: InnerColumnProps) {
  const rows = column.rowIds.map((row) => rowsMap[row]);
  return (
    <Column
      column={column}
      index={index}
      rows={rows}
      {...columnClassNames}
      rowClassNames={rowClassNames}
      isDragColumnsEnabled={isDragColumnsEnabled}
      onClickRow={onClickRow}
      
      multiSelect={multiSelect}
    />
  );
});

export default InnerColumnList;
