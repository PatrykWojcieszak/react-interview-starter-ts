import { Button } from "app/shared/button/Button";
import { BtnStyleTypes } from "app/shared/button/Button.types";
import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { CardProps } from "./Card.types";
import { Details } from "./details/Details";

import { Image } from "./image/Image";
import { Rating } from "./rating/Rating";

export const Card = ({ product }: CardProps) => {
  const btnClicked = () => {
    console.log("klik");
  };

  return (
    <StyledCard>
      <Image img={product.image} />
      <StyledBody>
        <Details title={product.name} description={product.description} />
        <StyledStickyBottom>
          <Rating rating={product.rating} />
          <Button
            name="showDetails"
            text="Show details"
            clicked={btnClicked}
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

  @media ${device.laptop} {
    width: 288px;
  }
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
