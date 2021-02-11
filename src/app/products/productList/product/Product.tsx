import React from "react";
import styled from "styled-components";
import { ProductTypes } from "./Product.types";
import { ReactComponent as Cross } from "../../../../styles/icons/cross.svg";

export const Product = ({ img, title, description, close }: ProductTypes) => {
  return (
    <StyledProduct>
      <StyledCross onClick={close} />
      <StyledImage src={img} />
      <StyledBody>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledBody>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  margin: 0 24px;
  position: relative;
  background-color: ${({ theme }) => theme.colors?.white};
  min-height: 530px;
  max-height: 570px;
  min-width: 327px;
  max-width: 600px;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 354px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const StyledBody = styled.div`
  padding: 24px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors?.black};
`;

const StyledDescription = styled.h4`
  font-size: 18px;
  line-height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors?.darkGrey};
`;

const StyledCross = styled(Cross)`
  position: absolute;
  top: 24px;
  right: 24px;
  fill: ${({ theme }) => theme.colors?.black};
  cursor: pointer;
`;
