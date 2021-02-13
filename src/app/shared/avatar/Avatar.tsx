import React from "react";
import styled from "styled-components";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({ clicked }: AvatarProps) => {
  return (
    <StyledAvatar
      src={process.env.PUBLIC_URL + "/images/avatar.png"}
      alt="avatar"
      onClick={clicked}
    />
  );
};

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
