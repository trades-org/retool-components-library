import React, { FC, useCallback, useMemo } from "react";
import { InnerRowProps } from "./drag-and-drop.types";
import Row from "./row";
import memoizeOne from "memoize-one";

const InnerList = React.memo(
  function InnerList({
    rows,
    rowClassNames,
    onClickRow,
    multiSelect,
  }: InnerRowProps) {
    const getSelectedMap: { [key: string]: boolean } | undefined =
      useMemo(() => {
        const result = multiSelect?.selectedRowIds?.reduce(
          (previous, current: string) => {
            return { ...previous, [current]: true };
          },
          {}
        );
        return result;
      }, [multiSelect?.selectedRowIds]);

    const isSelected = useCallback(
      (rowId: string) => {
        if (!getSelectedMap) {
          return false;
        }
        return getSelectedMap[rowId] || false;
      },
      [getSelectedMap]
    );

    const isGhosting = useCallback(
      (rowId: string) => {
        return (
          isSelected(rowId) &&
          Boolean(multiSelect?.draggingRowId) &&
          multiSelect?.draggingRowId !== rowId
        );
      },
      [multiSelect?.draggingRowId]
    );

    return (
      <>
        {rows.map((row, index) => {
          return (
            <Row
              key={row.id}
              index={index}
              row={row}
              {...rowClassNames}
              onClickRow={onClickRow}
              isSelected={isSelected(row.id)}
              isGhosting={isGhosting(row.id)}
              selectionCount={multiSelect?.selectedRowIds?.length}
              toggleSelection={multiSelect?.functions?.toggleSelection}
              toggleSelectionInGroup={multiSelect?.functions?.toggleSelectionInGroup}
              multiSelectTo={multiSelect?.functions?.multiSelectTo}
            />
          );
        })}
      </>
    );
  },
  function areEqual(prevProps, nextProps) {
    return prevProps.rows === nextProps.rows;
  }
);

export default InnerList;
