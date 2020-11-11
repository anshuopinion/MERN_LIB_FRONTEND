import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeLoginButton } from "../../../Elements/Button";

const LoginContatiner = styled(HomeLoginButton)``;

function LoginSelector({ link, role }) {
  return (
    <>
      <Link to={`${link}`}>
        <LoginContatiner>{role} Login</LoginContatiner>
      </Link>
    </>
  );
}

export default LoginSelector;
