import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { Button } from "app/shared/button/Button";
import { Input } from "app/shared/input/Input";

import { device } from "styles/breakpoints";

import { AppRoute } from "routing/AppRoute.enum";
import { BtnStyleTypes } from "app/shared/button/Button.types";
import { InputTypes } from "app/shared/input/Input.types";

export const Login = () => {
  const history = useHistory();

  const loginClickHandler = () => {
    history.push(AppRoute.home);
  };

  return (
    <StyledLoginContainer>
      <StyledImage
        src={process.env.PUBLIC_URL + "/images/signing_bg.png"}
        alt="background"
      />
      <StyledLoginWrapper>
        <StyledCompanyName>join.tsh.io</StyledCompanyName>
        <StyledLoginFormContainer>
          <StyledLoginFormWrapper>
            <StyledLogin>Login</StyledLogin>
            <StyledInputField
              as={Input}
              name="username"
              placeholder="Enter username"
              label="Username"
              type={InputTypes.text}
            />
            <StyledInputField
              as={Input}
              name="password"
              placeholder="Enter password"
              label="Password"
              type={InputTypes.password}
            />
            <StyledButton
              as={Button}
              name="login"
              text="Log in"
              clicked={loginClickHandler}
              styleType={BtnStyleTypes.primary}
            />
            <StyledForgotPassword>Forgot password?</StyledForgotPassword>
          </StyledLoginFormWrapper>
        </StyledLoginFormContainer>
      </StyledLoginWrapper>
    </StyledLoginContainer>
  );
};

const StyledLoginContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow-y: hidden;
`;

const StyledLoginWrapper = styled.div`
  padding: 24px;
  width: 100%;

  @media ${device.laptop} {
    padding: 24px 24px 24px 128px;
  }
`;

const StyledImage = styled.img`
  max-width: 604px;
  height: 100%;
  object-fit: cover;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const StyledCompanyName = styled.h2`
  margin-top: 16px;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors?.black};
`;

const StyledLoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;

const StyledLoginFormWrapper = styled.div`
  flex-basis: 496px;
  display: flex;
  flex-direction: column;
`;

const StyledLogin = styled.h2`
  font-size: 30px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors?.black};
  margin-bottom: 29px;
`;

const StyledInputField = styled.div`
  margin-bottom: 22px;
`;

const StyledButton = styled.button`
  margin-top: 24px;
`;

const StyledForgotPassword = styled.a`
  color: ${({ theme }) => theme.colors?.darkGrey};
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
  width: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.darkGrey};
`;
