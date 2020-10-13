import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { MainContainer } from "../elements";
import * as yup from "yup";
import { Card, Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hooks";
import ErrorModal from "../shared/components/ErrorModal";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const StyledCard = styled(Card)`
  background: ${(props) => props.theme.color.loginMain};
  align-self: center;
  width: 350px;
  height: 350px;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  margin-left: 1rem;
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Input = styled(TextField)`
  display: block;
  margin-bottom: 1rem;

  color: white;
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    color: white;
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
const SubmitBtn = styled(Button)`
  background: ${(props) => props.theme.color.loginButton};
  border: 1px solid transparent;
  padding: 0.25rem 3rem;
  width: 75%;
  justify-self: center;
  &:hover {
    background-color: #fff;
  }
`;

const StudentLogin = () => {
  const { sendRequest, error, clearError, loading } = useHttpClient();

  const initialValues = { email: "", password: "" };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6, "password is too short").required(),
  });

  const onSubmit = async (values) => {
    await sendRequest("/api/students/login");

    if ((values.email === email && values.password) || password) {
      history.replace("/student");
    }
  };

  const history = useHistory();
  const email = "anshu@gmail.com";
  const password = "test123";
  return (
    <MainContainer>
      <ErrorModal error={error} onClose={clearError} />
      <Container>
        <StyledCard>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Title>Student Login</Title>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <StyledForm>
                  <Field
                    variant="outlined"
                    type="email"
                    name="email"
                    id="email"
                    label="Enter Email..."
                    component={Input}
                  />
                  <Field
                    variant="outlined"
                    type="password"
                    name="password"
                    id="password"
                    label="Enter Password..."
                    component={Input}
                  />
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </StyledForm>
              </Formik>
            </>
          )}
        </StyledCard>
      </Container>
    </MainContainer>
  );
};

export default StudentLogin;
