import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { MainContainer } from "../elements";
import { Redirect } from "react-router-dom";


const Card = styled.div``;
const StyledForm = styled(Form)``;
const Input = styled(Field)`
  display: block;
  margin-bottom: 1rem;
  border: 1px dotted #000;
  width: 300px;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  outline: none;
`;
const SubmitBtn = styled.button``;

const TeacherLogin = () => {
  const [username] = useState("anshu");
  const [password] = useState("raj");
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  return isLoggedIn ? (
    <Redirect to="/teacher" />
  ) : (
    <MainContainer>
      <Card>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(value) => {
            if (value.username === username || value.password === password) {
              setIsLoggedIn(true);
            }
          }}
        >
          <StyledForm>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username..."
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password..."
            />
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </StyledForm>
        </Formik>
      </Card>
    </MainContainer>
  );
};

export default TeacherLogin;
