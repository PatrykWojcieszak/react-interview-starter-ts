import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Icon } from "../../../../shared/";

//TYPES
import { RatingProps } from "./Rating.types";
import { IconEnum } from "app/shared/icon/Icon.enum";

export const Rating = ({ rating }: RatingProps) => {
  return (
    <StyledRatingContainer>
      {[1, 2, 3, 4, 5].map((item) =>
        item <= rating ? (
          <StyledStar
            key={item}
            name={IconEnum.starFilled}
            width={13.33}
            height={12.67}
          />
        ) : (
          <StyledStar
            key={item}
            name={IconEnum.star}
            width={13.33}
            height={12.67}
          />
        )
      )}
    </StyledRatingContainer>
  );
};

const StyledRatingContainer = styled.div`
  > * {
    margin-right: 10.67px;
  }
`;

const StyledStar = styled(Icon)`
  fill: ${({ theme, name }) =>
    name === IconEnum.starFilled
      ? theme.colors?.yellow
      : theme.colors?.lightGrey};
`;
