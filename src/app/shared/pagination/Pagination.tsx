import React from "react";
import styled from "styled-components";

//TYPES
import { PaginationProps } from "./Pagination.types";

export const Pagination = ({
  totalPages,
  selectedPageHandler,
  selectedPage,
}: PaginationProps) => {
  const pageNumbers: JSX.Element[] = [];
  let ellipsis = false; //separator between page numbers

  const setSelectedPageHandler = (page: number) => {
    selectedPageHandler(page);
  };

  const addPageToArr = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <StyledElement
          onClick={() => setSelectedPageHandler(i)}
          selected={selectedPage === i ? true : false}
          key={i}>
          {i}
        </StyledElement>
      );
    }
  };

  if (totalPages > 7 && totalPages - selectedPage >= 6) ellipsis = true;

  if (ellipsis) {
    let startPage = 1;
    let siblingPage = 3;

    if (selectedPage - 1 > 0) {
      startPage = selectedPage - 1;
      siblingPage = selectedPage + 1;
    }

    addPageToArr(startPage, siblingPage);

    pageNumbers.push(
      <StyledElement key={"ellipsis"} selected={false}>
        ...
      </StyledElement>
    );

    addPageToArr(totalPages - 2, totalPages);
  } else {
    if (totalPages <= 7) addPageToArr(1, totalPages);
    else addPageToArr(totalPages - 6, totalPages);
  }

  return (
    <StyledPaginationContainer>
      <StyledTag
        disabled={selectedPage === 1}
        onClick={() => setSelectedPageHandler(1)}>
        First
      </StyledTag>
      {pageNumbers}
      <StyledTag
        disabled={selectedPage === totalPages}
        onClick={() => setSelectedPageHandler(totalPages)}>
        Last
      </StyledTag>
    </StyledPaginationContainer>
  );
};

const StyledPaginationContainer = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
`;

const StyledTag = styled.label<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors?.darkGrey : theme.colors?.black};
  font-size: 14px;
  line-height: 16px;
  margin: 0 33px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
`;

const StyledElement = styled.label<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors?.darkBlue : theme.colors?.black};
  margin: 0 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
`;
