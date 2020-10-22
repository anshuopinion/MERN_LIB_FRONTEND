import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import StudentLogin from "../components/StudentLogin";
import { useStateValue } from "../store";

const StyledLogin = styled.div``;

const Login = () => {
  const [{ token, role }] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    if (token && role === "student") {
      history.replace("/student");
    }
  }, [token, role, history]);
  return (
    <StyledLogin>
      <StudentLogin />
    </StyledLogin>
  );
};

export default Login;
