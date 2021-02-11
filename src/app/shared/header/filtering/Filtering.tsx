import React, { useState } from "react";
import { Input } from "app/shared/input/Input";
import { InputTypes } from "app/shared/input/Input.types";
import styled from "styled-components";
import { Checkbox } from "app/shared/checkbox/Checkbox";

export const Filtering = () => {
  const [isPromo, setIsPromo] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledFilteringContainer>
      <Input
        name="search"
        showIcon
        type={InputTypes.text}
        placeholder="Search"
      />
      <StyledCheckboxContainer>
        <Checkbox
          name="promo"
          checked={isPromo}
          label="Promo"
          checkedHandler={(checked: boolean) => setIsPromo(checked)}
        />
        <Checkbox
          name="active"
          checked={isActive}
          label="Active"
          checkedHandler={(checked: boolean) => setIsActive(checked)}
        />
      </StyledCheckboxContainer>
    </StyledFilteringContainer>
  );
};

const StyledFilteringContainer = styled.div`
  margin-top: 28px;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  margin-top: 24px;

  > :last-child {
    margin-left: 32px;
  }
`;
