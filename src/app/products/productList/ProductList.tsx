import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { Card } from "../card/Card";

export const ProductList = () => {
  return (
    <StyledProductList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  flex-wrap: wrap;
  gap: 24px;

  @media ${device.laptop} {
    padding: 56px 108px;
  }
`;
