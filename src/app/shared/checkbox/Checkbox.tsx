import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Icon } from "..";

//TYPES
import { CheckboxProps } from "./Checkbox.types";
import { IconEnum } from "../icon/Icon.enum";

//STYLES
import { flexCenterVertically } from "styles/mixins";

export const Checkbox = ({
  checked,
  name,
  label,
  checkedHandler,
}: CheckboxProps) => {
  const checkboxChangedHandler = (event: boolean) => {
    checkedHandler(event);
  };

  return (
    <CheckboxContainer onClick={() => checkboxChangedHandler(!checked)}>
      <StyledCheckbox checked={checked} name={name}>
        <Icon name={IconEnum.checked} width={18} height={14} />
      </StyledCheckbox>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled(flexCenterVertically)``;

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
