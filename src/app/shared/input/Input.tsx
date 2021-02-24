import React from "react";
import styled from "styled-components";

//ICON
//import { ReactComponent as SearchIcon } from "../../../styles/icons/search.svg";
import { SearchIcon } from "../../../../public/icons/searchIcon";
import { Icon } from "../Icon";

//TYPES
import { InputProps } from "./Input.types";

export const Input = ({
  showIcon,
  name,
  placeholder,
  label,
  type,
  className,
  onChangeHandler,
  icon,
}: InputProps) => {
  return (
    <>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInputWrapper className={className}>
        <StyledInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(event.target.value)
          }
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        {showIcon && <Icon name={icon} size={18} />}
      </StyledInputWrapper>
    </>
  );
};

const StyledInputWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors?.accent};
  position: relative;
  border-radius: 8px;
  display: flex;
  align-items: center;
  max-height: 48px;
  min-height: 48px;

  svg {
    cursor: pointer;
    position: absolute;
    right: 19.51px;
    top: 0;
    bottom: 0;
    margin: auto;
    stroke: ${({ theme }) => theme.colors?.black};
    fill: ${({ theme }) => theme.colors?.black};
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors?.white};
  outline: none;
  font-size: 14px;
  line-height: 16px;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors?.black};
  font-family: ${({ theme }) => theme.fonts?.family};
  width: 100%;
  height: 100%;

  ::placeholder {
    color: #9194a5;
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;
