import { IconEnum } from "app/shared/icon/Icon.enum";
import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Icon } from "../../../shared/";

//TYPES
import { ProductTypes } from "./Product.types";

export const Product = ({
  img,
  name,
  description,
  close,
  reference,
}: ProductTypes) => {
  return (
    <StyledProduct ref={reference}>
      <StyledCross
        onClick={close}
        name={IconEnum.cross}
        height={14}
        width={14}
      />
      <StyledImage src={img} />
      <StyledBody>
        <StyledTitle>{name}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledBody>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  margin: 0 24px;
  position: relative;
  background-color: ${({ theme }) => theme.colors?.white};
  min-height: 530px;
  max-height: 570px;
  min-width: 327px;
  max-width: 600px;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 354px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const StyledBody = styled.div`
  padding: 24px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors?.black};
`;

const StyledDescription = styled.h4`
  font-size: 18px;
  line-height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors?.darkGrey};
`;

const StyledCross = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 24px;
  fill: ${({ theme }) => theme.colors?.black};
  cursor: pointer;
`;
