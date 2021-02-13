import React, { useState, useRef } from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { Dropdown } from "../dropdown/Dropdown";

import { Avatar } from "./avatar/Avatar";
import { HeaderProps } from "./Header.types";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Button } from "../button/Button";
import { BtnStyleTypes } from "../button/Button.types";

export const Header = ({ children }: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("loggedIn", true);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  useClickOutside(ref, handleClickOutside);

  const loginHandler = () => {
    setIsLoggedIn(true);
    setShowDropdown(false);
  };

  return (
    <StyledHeaderContainer>
      <StyledCompanyName>join.tsh.io</StyledCompanyName>
      {children}
      <StyledUserContainer>
        {isLoggedIn ? (
          <>
            {" "}
            <StyledAvatar
              src={process.env.PUBLIC_URL + "/images/avatar.png"}
              alt="avatar"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <StyledDropdownWrapper reference={ref} as={Dropdown}>
                <StyledLogout onClick={() => setIsLoggedIn(false)}>
                  Logout
                </StyledLogout>
              </StyledDropdownWrapper>
            )}
          </>
        ) : (
          <Button
            styleType={BtnStyleTypes.secondary}
            text="Log in"
            name="login"
            clicked={loginHandler}
          />
        )}
      </StyledUserContainer>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 248px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors?.white};

  @media ${device.laptop} {
    flex-direction: row;
    height: 144px;
    padding: 24px 105px;
  }
`;

const StyledUserContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${device.laptop} {
    right: 105px;
  }
`;

const StyledCompanyName = styled.h2`
  color: ${({ theme }) => theme.colors?.black};
  font-size: 24px;
  margin-top: 28px;
  line-height: 40px;
`;

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledDropdownWrapper = styled.div`
  margin-top: 10px;
`;

const StyledLogout = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors?.black};
  cursor: pointer;
`;
