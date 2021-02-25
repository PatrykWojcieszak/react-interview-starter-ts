import React from "react";
import styled, { keyframes } from "styled-components";

//COMPONENTS
import { Icon } from "../../shared";

//TYPES
import { IconEnum } from "../icon/Icon.enum";

export const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinnerOval name={IconEnum.spinnerOval} width={60} height={60} />
      <StyledSpinner name={IconEnum.spinner} width={60} height={60} />
    </StyledSpinnerWrapper>
  );
};

const StyledSpinnerWrapper = styled.div`
  position: relative;
  z-index: 900;
  width: 56px;
  height: 56px;
`;

const StyledSpinnerOval = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  stroke: ${({ theme }) => theme.colors?.accent};
  fill: transparent;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  margin: auto 0;
  width: 56px;
  height: 56px;
  stroke: ${({ theme }) => theme.colors?.lightBlue};
  animation: ${rotate} 1.5s linear infinite;
  fill: transparent;
`;
