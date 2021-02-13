import React, { useRef, useState } from "react";
import styled from "styled-components";

//COMPONENTS
import { Avatar } from "app/shared/avatar/Avatar";
import { Button } from "app/shared/button/Button";
import { Dropdown } from "app/shared/dropdown/Dropdown";

//TYPES
import { BtnStyleTypes } from "app/shared/button/Button.types";
import { device } from "styles/breakpoints";

//HOOKS
import { useClickOutside, useLocalStorage } from "hooks";

export const User = () => {
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
    <StyledUserContainer>
      {isLoggedIn ? (
        <>
          <Avatar clicked={() => setShowDropdown(!showDropdown)} />
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
  );
};

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

const StyledDropdownWrapper = styled.div`
  margin-top: 10px;
`;

const StyledLogout = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors?.black};
  cursor: pointer;
`;
