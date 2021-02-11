import { Button } from "app/shared/button/Button";
import { BtnStyleTypes } from "app/shared/button/Button.types";
import React from "react";
import styled from "styled-components";
import { Details } from "./details/Details";

import { Image } from "./image/Image";
import { Rating } from "./rating/Rating";

export const Card = () => {
  const btnClicked = () => {
    console.log("klik");
  };

  return (
    <StyledCard>
      <Image img="https://i.imgur.com/zncbCrB.png" />
      <StyledContent>
        <Details
          title="Nike Running Shoes"
          description="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
        />
        <Rating rating={3} />
        <Button
          name="showDetails"
          text="Show details"
          clicked={btnClicked}
          disabled
          styleType={BtnStyleTypes.primary}
        />
      </StyledContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  width: 327px;
  height: 400px;
  border-radius: 8px;
`;

const StyledContent = styled.div`
  padding: 24px 16px;
`;
