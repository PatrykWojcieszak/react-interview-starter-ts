import React from "react";
import styled from "styled-components";

//ICON
import { ReactComponent as TaskListPlain } from "../../../../styles/icons/task-list-plain.svg";

export const NoProducts = () => {
  return (
    <StyledNoProductsContainer>
      <StyledTaskListPlain />
      <StyledTitle>Ooops... It's empty here</StyledTitle>
      <StyledDescription>There are no products on the list</StyledDescription>
    </StyledNoProductsContainer>
  );
};

const StyledNoProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 8px;
  min-width: 327px;
  width: 100%;
  max-width: 600px;
  height: 344px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors?.black};
`;

const StyledDescription = styled.h4`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors?.darkGrey};
`;

const StyledTaskListPlain = styled(TaskListPlain)`
  stroke: ${({ theme }) => theme.colors?.lightGrey};
  fill: ${({ theme }) => theme.colors?.lightGrey};
  margin-bottom: 22.48px;
`;
