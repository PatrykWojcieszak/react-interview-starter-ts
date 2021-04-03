import React from "react";
import styled from "styled-components";

//TYPES
import { BtnStyleTypes, ButtonProps } from "./Button.types";

export const Button = ({
  name,
  clicked,
  text,
  disabled,
  styleType,
  className,
}: ButtonProps) => {
  const getButtonStyle = () => {
    switch (styleType) {
      case BtnStyleTypes.primary:
        return StyledButtonPrimary;
      case BtnStyleTypes.secondary:
        return StyledButtonSecondary;
      default:
        return StyledButtonPrimary;
    }
  };

  return (
    <StyledButton
      as={getButtonStyle()}
      className={className}
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
  padding: 11px 24px;
  border: 1px solid ${({ theme }) => theme.colors?.lightBlue};
`;

const StyledButtonPrimary = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.darkBlue};
    color: ${({ theme }) => theme.colors?.white};
    border: 1px solid ${({ theme }) => theme.colors?.darkBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors?.darkGrey};
    color: ${({ theme }) => theme.colors?.white};
    border: 1px solid ${({ theme }) => theme.colors?.darkGrey};
    cursor: auto;
  }
`;

const StyledButtonSecondary = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.white};
    color: ${({ theme }) => theme.colors?.darkBlue};
    border: 1px solid ${({ theme }) => theme.colors?.darkBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors?.white};
    color: ${({ theme }) => theme.colors?.darkGrey};
    border: 1px solid ${({ theme }) => theme.colors?.darkGrey};
    cursor: auto;
  }
`;
