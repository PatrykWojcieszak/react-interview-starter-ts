import React, { useState } from "react";
import styled from "styled-components";
import { PaginationProps } from "./Pagination.types";

export const Pagination = ({
  totalPages,
  selectedPageHandler,
}: PaginationProps) => {
  const [selected, setSelected] = useState(1);

  const numbers: JSX.Element[] = [];

  const setPage = (page: number) => {
    setSelected(page);
    selectedPageHandler(page);
  };

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(
        <StyledElement
          onClick={() => setPage(i)}
          selected={selected === i ? true : false}
          key={i}>
          {i}
        </StyledElement>
      );
    }
  } else {
    if (totalPages - selected < 6) {
      for (let i = totalPages - 6; i <= totalPages; i++) {
        numbers.push(
          <StyledElement
            onClick={() => setPage(i)}
            selected={selected === i ? true : false}
            key={i}>
            {i}
          </StyledElement>
        );
      }
    } else {
      let startPage = selected;
      let endPage = selected;

      if (selected - 1 <= 0) {
        startPage = 2;
        endPage = 2;
      }

      for (let i = startPage - 1; i <= endPage + 1; i++) {
        // console.log(i);
        numbers.push(
          <StyledElement
            onClick={() => setPage(i)}
            selected={selected === i ? true : false}
            key={i}>
            {i}
          </StyledElement>
        );
      }

      numbers.push(
        <StyledElement key={Math.random()} selected={false}>
          ...
        </StyledElement>
      );

      for (let i = totalPages - 2; i <= totalPages; i++) {
        numbers.push(
          <StyledElement
            onClick={() => setPage(i)}
            selected={selected === i ? true : false}
            key={i}>
            {i}
          </StyledElement>
        );
      }
    }
  }

  return (
    <StyledPaginationContainer>
      <StyledTag onClick={() => setPage(1)}>First</StyledTag>
      {numbers}
      <StyledTag onClick={() => setPage(totalPages)}>Last</StyledTag>
    </StyledPaginationContainer>
  );
};

const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTag = styled.label`
  color: ${({ theme }) => theme.colors?.darkGrey};
  font-size: 16px;
  line-height: 18px;
  margin: 0 10px;
  cursor: pointer;
`;

const StyledElement = styled.label<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors?.darkBlue : theme.colors?.black};
  margin: 0 10px;
  cursor: pointer;
`;
