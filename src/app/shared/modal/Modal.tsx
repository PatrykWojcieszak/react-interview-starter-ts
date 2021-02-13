import React from "react";
import styled from "styled-components";

//TYPES
import { ModalProps } from "./Modal.types";

//STYLES
import { flexCenter } from "styles/mixins";

export const Modal = ({ children, show }: ModalProps) => {
  if (show) return <StyledModal show={show}>{children}</StyledModal>;

  return null;
};

const StyledModal = styled(flexCenter)<{ show: boolean }>`
  background-color: #1a1b1de5;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;
