import React from "react";
import styled from "styled-components";

export const Card = () => {
  return <StyledCard>asd</StyledCard>;
};

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  width: 327px;
  height: 400px;
  border-radius: 8px;
`;
