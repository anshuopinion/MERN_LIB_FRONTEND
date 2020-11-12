import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeLoginButton } from "../../../Elements/Button";

const LoginContatiner = styled(HomeLoginButton)`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='50' cy='0' r='50'/%3E%3Cg fill='%2309110e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23101c17' cx='50' cy='100' r='50'/%3E%3Cg fill='%2314261f' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23173127' cx='50' cy='200' r='50'/%3E%3Cg fill='%231a3c2f' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%231c4737' cx='50' cy='300' r='50'/%3E%3Cg fill='%231e5340' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23205f49' cx='50' cy='400' r='50'/%3E%3Cg fill='%23226b52' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%2323775b' cx='50' cy='500' r='50'/%3E%3Cg fill='%23248464' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%2324916e' cx='50' cy='600' r='50'/%3E%3Cg fill='%23249e78' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%2323ab81' cx='50' cy='700' r='50'/%3E%3Cg fill='%2322b98b' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%2320c795' cx='50' cy='800' r='50'/%3E%3Cg fill='%231ed4a0' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2319e2aa' cx='50' cy='900' r='50'/%3E%3Cg fill='%2313f1b4' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%2308ffbf' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
`;

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
