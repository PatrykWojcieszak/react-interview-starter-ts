import React from "react";
import styled from "styled-components";

import { ReactComponent as CheckedIcon } from "../../../styles/icons/checked.svg";

import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  checked,
  name,
  label,
  checkedHandler,
}: CheckboxProps) => {
  const checkboxChangedHandler = (event: boolean) => {
    console.log("checked");
    checkedHandler(event);
  };

  return (
    <CheckboxContainer onClick={() => checkboxChangedHandler(!checked)}>
      <StyledCheckbox checked={checked} name={name}>
        <CheckedIcon />
      </StyledCheckbox>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors?.black};
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean; name: string }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${({ theme, checked }) =>
    checked ? theme.colors?.lightBlue : theme.colors?.white};
  border: 1px solid
    ${({ theme, checked }) =>
      checked ? theme.colors?.lightBlue : theme.colors?.accent};
  border-radius: 3px;
  transition: all 150ms;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: white;
    stroke: white;
    width: 12px;
    height: 9px;
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
