import React from "react";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../../styles/icons/search.svg";

import { InputProps } from "./Input.types";

export const Input = ({
  showIcon,
  name,
  placeholder,
  label,
  type,
}: InputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log((event.target as HTMLInputElement).value);
    }
  };

  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInputWrapper>
        <StyledInput
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(event)
          }
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {showIcon && <SearchIcon />}
      </StyledInputWrapper>
    </>
  );
};

const StyledInputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors?.accent};
  position: relative;
  border-radius: 8px;
  height: 48px;

  svg {
    cursor: pointer;
    position: absolute;
    right: 19.51px;
    top: 0;
    bottom: 0;
    margin: auto;
    stroke: ${({ theme }) => theme.colors?.fontMain};
    fill: ${({ theme }) => theme.colors?.fontMain};
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors?.foreground};
  outline: none;
  font-size: 14px;
  line-height: 16px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors?.fontMain};
  font-family: ${({ theme }) => theme.fonts?.family};

  ::placeholder {
    color: #9194a5;
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
`;
