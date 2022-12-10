import React from "react";
import Column from "./Column";
import { InnerColumnProps } from "./drag-and-drop.types";

const InnerColumnList = React.memo(function InnerColumnList({
  column,
  rowsMap,
  index,
}: InnerColumnProps) {
  const rows = column.rowIds.map((row) => rowsMap[row]);
  return <Column column={column} index={index} rows={rows} />;
});

export default InnerColumnList;
