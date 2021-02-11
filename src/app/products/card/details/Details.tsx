import React from "react";
import styled from "styled-components";

import { DetailsProps } from "./Details.types";

export const Details = ({ title, description }: DetailsProps) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </>
  );
};

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.fontMain};
  font-size: 18px;
  line-height: 16px;
`;

const StyledDescription = styled.h4`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors?.grey};
  font-size: 14px;
  line-height: 16px;
`;
