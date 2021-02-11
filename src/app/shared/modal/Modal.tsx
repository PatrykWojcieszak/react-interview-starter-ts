import React from "react";
import styled from "styled-components";
import { ModalProps } from "./Moda.types";

export const Modal = ({ children }: ModalProps) => {
  return <StyledModal>{children}</StyledModal>;
};

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors?.black} 50%;
`;
