import React from "react";
import styled from "styled-components";

import { BtnStyleTypes, ButtonProps } from "./Button.types";

export const Button = ({
  name,
  clicked,
  text,
  disabled,
  styleType,
}: ButtonProps) => {
  return (
    <StyledButton
      styleType={styleType}
      name={name}
      onClick={clicked}
      disabled={disabled}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ styleType: BtnStyleTypes }>`
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  height: 38px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts?.family};
  outline: none;

  background-color: ${({ theme, styleType }) =>
    styleType === BtnStyleTypes.primary
      ? theme.colors?.lightBlue
      : theme.colors?.white};
  color: ${({ theme, styleType }) =>
    styleType === BtnStyleTypes.primary
      ? theme.colors?.white
      : theme.colors?.lightBlue};

  border: 1px solid ${({ theme }) => theme.colors?.lightBlue};

  &:hover {
    background-color: ${({ theme, styleType }) =>
      styleType === BtnStyleTypes.primary
        ? theme.colors?.darkBlue
        : theme.colors?.white};
    color: ${({ theme, styleType }) =>
      styleType === BtnStyleTypes.primary
        ? theme.colors?.white
        : theme.colors?.darkBlue};

    border: 1px solid ${({ theme }) => theme.colors?.darkBlue};
  }

  &:disabled {
    background-color: ${({ theme, styleType }) =>
      styleType === BtnStyleTypes.primary
        ? theme.colors?.darkGrey
        : theme.colors?.white};

    color: ${({ theme, styleType }) =>
      styleType === BtnStyleTypes.primary
        ? theme.colors?.white
        : theme.colors?.darkGrey};

    border: 1px solid ${({ theme }) => theme.colors?.darkGrey};
  }
`;