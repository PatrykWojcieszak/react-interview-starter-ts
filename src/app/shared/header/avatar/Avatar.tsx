import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";

export const Avatar = () => {
  return (
    <>
      <StyledAvatar
        src={process.env.PUBLIC_URL + "/images/avatar.png"}
        alt="avatar"
      />
    </>
  );
};

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: 48px;
  right: 24px;

  @media ${device.laptop} {
    right: 105px;
  }
`;
