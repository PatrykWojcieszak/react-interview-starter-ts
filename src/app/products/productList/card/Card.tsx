import { Button } from "app/shared/button/Button";
import { BtnStyleTypes } from "app/shared/button/Button.types";
import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { CardProps } from "./Card.types";
import { Details } from "./details/Details";

import { Rating } from "./rating/Rating";

export const Card = ({ product, showDetailsHandler }: CardProps) => {
  return (
    <StyledCard>
      {product.promo && <StyledPromo>Promo</StyledPromo>}
      <StyledImage
        src={product.image}
        alt="product"
        isActive={product.active}
      />
      <StyledBody>
        <Details title={product.name} description={product.description} />
        <StyledStickyBottom>
          <Rating rating={product.rating} />
          <Button
            name="showDetails"
            text={product.active ? "Show details" : "Unavailable"}
            disabled={!product.active}
            clicked={() => showDetailsHandler(product.id)}
            styleType={BtnStyleTypes.primary}
          />
        </StyledStickyBottom>
      </StyledBody>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  width: 327px;
  max-height: 400px;
  min-height: 400px;
  border-radius: 8px;
  position: relative;

  @media ${device.laptop} {
    width: 288px;
  }
`;

const StyledPromo = styled.span`
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.colors?.yellow};
  color: ${({ theme }) => theme.colors?.white};
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  top: 16px;
  left: 0;
  z-index: 900;
`;

const StyledBody = styled.div`
  flex-direction: column;
  padding: 24px 16px;
  height: 100%;
`;

const StyledStickyBottom = styled.div`
  > :last-child {
    margin-top: 18px;
  }
`;

const StyledImage = styled.img<{ isActive: boolean }>`
  height: 170px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  mix-blend-mode: normal;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;
