import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//COMPONENTS
import { Button, Input } from "app/shared";

//TYPES
import { device } from "styles/breakpoints";
import { InputTypes } from "app/shared/input/Input.types";
import { BtnStyleTypes } from "app/shared/button/Button.types";
import { AppRoute } from "routing/AppRoute.enum";

//HOOKS
import { useLocalStorage } from "hooks";

//STYLES
import { flexCenterHorizontally, flexColumn } from "styles/mixins";

const Login = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("loggedIn", false);

  const loginClickHandler = () => {
    history.push(AppRoute.home);
    setIsLoggedIn(true);
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
              onChangeHandler={() => {}}
            />
            <StyledInputField
              as={Input}
              name="password"
              placeholder="Enter password"
              label="Password"
              type={InputTypes.password}
              onChangeHandler={() => {}}
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

export default Login;

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

const StyledLoginFormContainer = styled(flexCenterHorizontally)`
  width: 100%;
  align-items: center;
  margin-top: 103px;

  @media ${device.laptop} {
    justify-content: flex-start;
    margin-top: 235px;
  }
`;

const StyledLoginFormWrapper = styled(flexColumn)`
  flex-basis: 496px;
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
