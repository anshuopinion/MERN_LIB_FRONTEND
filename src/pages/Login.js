import React from "react";

import styled from "styled-components";
import StudentLogin  from "../components/StudentLogin";

const StyledLogin = styled.div``;

const Login = () => {
  return (
    <StyledLogin>
      <StudentLogin />
    </StyledLogin>
  );
};

export default Login;
