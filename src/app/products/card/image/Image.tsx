import React from "react";
import styled from "styled-components";

import { ImageProps } from "./Image.types";

export const Image = ({ img }: ImageProps) => {
  return <StyledImage src={img} alt="product"></StyledImage>;
};

const StyledImage = styled.img`
  height: 170px;
  width: 327px;
  border-radius: 8px 8px 0 0;
`;
