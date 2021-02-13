import React from "react";
import styled from "styled-components";

//TYPES
import { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({ children, className, reference }: DropdownProps) => {
  return (
    <StyledDropdown ref={reference} className={className}>
      {children}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 20px 16px;
  border-radius: 4px;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);
  min-width: 184px;
`;
