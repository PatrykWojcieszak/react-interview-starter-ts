import React from "react";
import styled from "styled-components";
import { Details } from "./details/Details";

import { Image } from "./image/Image";

export const Card = () => {
  return (
    <StyledCard>
      <Image img="https://i.imgur.com/zncbCrB.png" />
      <StyledContent>
        <Details
          title="Nike Running Shoes"
          description="Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt"
        />
      </StyledContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  width: 327px;
  height: 400px;
  border-radius: 8px;
`;

const StyledContent = styled.div`
  padding: 24px 16px;
`;
