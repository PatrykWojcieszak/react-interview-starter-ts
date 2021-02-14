import React from "react";
import styled, { keyframes } from "styled-components";

//ICONS
import { ReactComponent as SpinnerIcon } from "../../../styles/icons/spinner.svg";
import { ReactComponent as SpinnerOvalIcon } from "../../../styles/icons/spinnerOval.svg";

export const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinnerOval />
      <StyledSpinner />
    </StyledSpinnerWrapper>
  );
};

const StyledSpinnerWrapper = styled.div`
  position: relative;
  z-index: 900;
  width: 56px;
  height: 56px;
`;

const StyledSpinnerOval = styled(SpinnerOvalIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  stroke: ${({ theme }) => theme.colors?.accent};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin: auto 0;
  width: 56px;
  height: 56px;
  stroke: ${({ theme }) => theme.colors?.lightBlue};
  animation: ${rotate} 1.5s linear infinite;
`;
