import React from "react";

import { ReactComponent as StarFilled } from "../../../../styles/icons/starFilled.svg";
import { ReactComponent as Star } from "../../../../styles/icons/star.svg";

import { RatingProps } from "./Rating.types";
import styled from "styled-components";

export const Rating = ({ rating }: RatingProps) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) =>
        item <= rating ? (
          <StyledStarFilled key={item} />
        ) : (
          <StyledStar key={item} />
        )
      )}
    </>
  );
};

const StyledStarFilled = styled(StarFilled)`
  fill: ${({ theme }) => theme.colors?.yellow};
`;

const StyledStar = styled(Star)`
  fill: ${({ theme }) => theme.colors?.lightGrey};
`;
