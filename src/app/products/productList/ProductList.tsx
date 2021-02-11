import React from "react";
import styled from "styled-components";
import { Card } from "../card/Card";

export const ProductList = () => {
  return (
    <StyledProductList>
      <Card />
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;
