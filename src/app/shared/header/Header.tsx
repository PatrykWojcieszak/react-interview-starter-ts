import React from "react";
import styled from "styled-components";

import { Avatar } from "./avatar/Avatar";
import { Filtering } from "./filtering/Filtering";

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledCompanyName>join.tsh.io</StyledCompanyName>
      <Filtering />
      <Avatar />
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  height: 248px;
  padding: 24px;
`;

const StyledCompanyName = styled.h2`
  color: ${({ theme }) => theme.colors?.fontMain};
  font-size: 24px;
  margin-top: 28px;
  line-height: 40px;
`;
