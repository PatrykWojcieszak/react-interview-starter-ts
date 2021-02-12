import React, { useState } from "react";
import { Input } from "app/shared/input/Input";
import { InputTypes } from "app/shared/input/Input.types";
import styled from "styled-components";
import { Checkbox } from "app/shared/checkbox/Checkbox";
import { device } from "styles/breakpoints";
import { FilteringProps } from "./Filtering.types";

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
        showIcon
        type={InputTypes.text}
        placeholder="Search"
        onEnterHandler={(value: string) => searchHandler(value)}
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

const StyledFilteringContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  width: 100%;
  flex-direction: column;

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
