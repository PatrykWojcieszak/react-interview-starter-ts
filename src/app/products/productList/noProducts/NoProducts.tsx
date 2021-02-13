import React from "react";
import styled from "styled-components/macro";

//ICON
import { ReactComponent as TaskListPlain } from "../../../../styles/icons/task-list-plain.svg";

//STYLES
import { flexColumnCenter } from "styles/mixins";

export const NoProducts = () => {
  return (
    <StyledNoProductsContainer>
      <StyledTaskListPlain />
      <StyledTitle>Ooops... It's empty here</StyledTitle>
      <StyledDescription>There are no products on the list</StyledDescription>
    </StyledNoProductsContainer>
  );
};

const StyledNoProductsContainer = styled(flexColumnCenter)`
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 8px;
  min-width: 327px;
  max-width: 600px;
  width: 100%;
  height: 344px;
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
