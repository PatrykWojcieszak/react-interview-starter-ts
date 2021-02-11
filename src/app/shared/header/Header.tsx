import React from "react";
import styled from "styled-components";
import { Input } from "../input/Input";
import { InputTypes } from "../input/Input.types";
import { Avatar } from "./avatar/Avatar";

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledCompanyName>join.tsh.io</StyledCompanyName>
      <Input
        name="search"
        showIcon
        type={InputTypes.text}
        placeholder="Search"
      />
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
`;
