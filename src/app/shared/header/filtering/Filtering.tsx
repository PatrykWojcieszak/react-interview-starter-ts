import React, { useState } from "react";
import { Input } from "app/shared/input/Input";
import { InputTypes } from "app/shared/input/Input.types";
import styled from "styled-components";
import { Checkbox } from "app/shared/checkbox/Checkbox";

export const Filtering = () => {
  const [isPromo, setIsPromo] = useState(false);

  const isPromoHandler = (checked: boolean) => {
    setIsPromo(checked);
  };

  return (
    <StyledFilteringContainer>
      <Input
        name="search"
        showIcon
        type={InputTypes.text}
        placeholder="Search"
      />
      <Checkbox
        name="active"
        checked={isPromo}
        label="Active"
        checkedHandler={(checked: boolean) => isPromoHandler(checked)}
      />
    </StyledFilteringContainer>
  );
};

const StyledFilteringContainer = styled.div`
  margin-top: 28px;
`;
