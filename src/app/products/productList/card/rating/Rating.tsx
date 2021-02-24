import { IconEnum } from "app/shared/icon/Icon.enum";
import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Icon } from "../../../../shared/";

//TYPES
import { RatingProps } from "./Rating.types";

export const Rating = ({ rating }: RatingProps) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) =>
        item <= rating ? (
          <StyledStar
            key={item}
            name={IconEnum.starFilled}
            width={20}
            height={19}
          />
        ) : (
          <StyledStar key={item} name={IconEnum.star} width={20} height={19} />
        )
      )}
    </>
  );
};

const StyledStar = styled(Icon)`
  fill: ${({ theme, name }) =>
    name === IconEnum.starFilled
      ? theme.colors?.yellow
      : theme.colors?.lightGrey};
`;
