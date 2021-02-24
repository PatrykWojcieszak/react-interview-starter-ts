import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Input, Checkbox } from "app/shared";

//TYPES
import { InputTypes } from "app/shared/input/Input.types";
import { device } from "styles/breakpoints";
import { FilteringProps } from "./Filtering.types";
import { IconEnum } from "app/shared/icon/Icon.enum";

//STYLES
import { flexColumn } from "styles/mixins";

export const Filtering = ({
  isActive,
  isPromo,
  isActiveHandler,
  isPromoHandler,
  searchHandler,
}: FilteringProps) => {
  return (
    <StyledFilteringContainer>
      <StyledInput
        as={Input}
        name="search"
        type={InputTypes.text}
        placeholder="Search"
        icon={IconEnum.search}
        onChangeHandler={(value: string) => searchHandler(value)}
      />
      <StyledCheckboxContainer>
        <Checkbox
          name="promo"
          checked={isPromo}
          label="Promo"
          checkedHandler={(checked: boolean) => isPromoHandler(checked)}
        />
        <Checkbox
          name="active"
          checked={isActive}
          label="Active"
          checkedHandler={(checked: boolean) => isActiveHandler(checked)}
        />
      </StyledCheckboxContainer>
    </StyledFilteringContainer>
  );
};

const StyledInput = styled.div`
  max-width: 392px;
  flex-basis: 392px;
`;

const StyledFilteringContainer = styled(flexColumn)`
  justify-content: center;
  margin-top: 28px;
  width: 100%;

  @media ${device.laptop} {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 0;
    margin-left: 105px;
  }
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  > :last-child {
    margin-left: 32px;
  }

  @media ${device.laptop} {
    margin-top: 0;
    margin-left: 24px;
  }
`;
