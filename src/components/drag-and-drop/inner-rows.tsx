import React, { FC } from "react";
import { InnerRowProps } from "./drag-and-drop.types";
import Row from "./row";

const InnerList = React.memo(
  function InnerList({ rows }: InnerRowProps) {
    return (
      <>
        {rows.map((row, index) => (
          <Row key={row.id} index={index} row={row} />
        ))}
      </>
    );
  },
  function areEqual(prevProps, nextProps) {
    return prevProps.rows === nextProps.rows;
  }
);

export default InnerList;
