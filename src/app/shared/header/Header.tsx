import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";

import { HeaderProps } from "./Header.types";

import { User } from "./user/User";

export const Header = ({ children }: HeaderProps) => {
  return (
    <StyledHeaderContainer>
      <StyledCompanyName>join.tsh.io</StyledCompanyName>
      {children}
      <User />
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 248px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors?.white};

  @media ${device.laptop} {
    flex-direction: row;
    height: 144px;
    padding: 24px 105px;
  }
`;

const StyledCompanyName = styled.h2`
  color: ${({ theme }) => theme.colors?.black};
  font-size: 24px;
  margin-top: 28px;
  line-height: 40px;
`;
