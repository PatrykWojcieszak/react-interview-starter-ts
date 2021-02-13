import React from "react";
import styled from "styled-components";

//TYPES
import { ModalProps } from "./Modal.types";

export const Modal = ({ children, show, close }: ModalProps) => {
  if (show)
    return (
      <StyledModal show={show} onClick={close}>
        {children}
      </StyledModal>
    );

  return null;
};

const StyledModal = styled.div<{ show: boolean }>`
  background-color: #1a1b1de5;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;
