import React from "react";
import styled from "styled-components";

import { DetailsProps } from "./Details.types";

export const Details = ({ title, description }: DetailsProps) => {
  return (
    <StyledDetailsContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledDetailsContainer>
  );
};

const StyledDetailsContainer = styled.div`
  height: calc(100% - (38px + 24px + 18px));
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.black};
  font-size: 18px;
  line-height: 16px;
`;

const StyledDescription = styled.h4`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors?.darkGrey};
  font-size: 14px;
  line-height: 16px;
`;
