import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../Store";
import styled from "styled-components";
import LoginSelector from "./components/LoginSelector";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginContainer = styled.div`
  width: 900px;

  display: flex;
  justify-content: space-around;
`;

function Home() {
  const history = useHistory();
  const [{ token, role }] = useStateValue();

  useEffect(() => {
    const redirector = () => {
      role === "student" && token && history.replace("/student");
      role === "teacher" && token && history.replace("/teacher");
      role === "admin" && token && history.replace("/admin");
      role === null && token === null && history.replace("/");
    };
    redirector();
  }, [history, role, token]);

  return (
    <StyledHome>
      <LoginContainer>
        <LoginSelector link={"/admin-login"} role={`Admin`} />
        <LoginSelector link={"/student-login"} role={`Student`} />
        <LoginSelector link={"/teacher-login"} role={`Teacher`} />
      </LoginContainer>
    </StyledHome>
  );
}

export default Home;
