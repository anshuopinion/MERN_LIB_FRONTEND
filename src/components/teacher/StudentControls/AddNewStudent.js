import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, FormControl, FormLabel } from "@material-ui/core";
import styled from "styled-components";
import { TextField } from "formik-material-ui";

const StyledAddNewStudent = styled.div`
  .form {
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .MuiFormControl-root {
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.color.formInput};
      .MuiFormInput-root {
        color: ${(props) => props.theme.color.formInput};
      }
      .MuiFormLabel-root {
        margin-left: 0.5rem;
        margin-bottom: 0.3rem;
        color: ${(props) => props.theme.color.formInput};
      }

      & label.Mui-focused {
        color: ${(props) => props.theme.color.formInput};
      }
      & .MuiOutlinedInput-root {
        color: ${(props) => props.theme.color.formInput};
        /* background-color: ${(props) => props.theme.color.formInput}; */

        &.Mui-focused fieldset {
          border-color: ${(props) => props.theme.color.formInput};
        }
      }
    }
    .form-parts {
      display: flex;
      justify-content: space-between;
      align-items: bottom;
    }
  }
`;

function AddNewStudent() {
  return (
    <StyledAddNewStudent>
      <Formik
        initialValues={{
          fullname: "",
          username: "",
          mobile: 0,
          libcardno: 0,
          studentImage: undefined,
          email: "",
          semester: 0,
          universityID: 0,
          password: "",
          year: "",
        }}
        onSubmit={async (values) => {}}
      >
        {(props) => (
          <Form className="form">
            <div className="form-parts">
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Field
                  size="small"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Name..."
                  component={TextField}
                  variant="outlined"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Username</FormLabel>
                <Field
                  size="small"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  component={TextField}
                  variant="outlined"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Mobile No</FormLabel>
                <Field
                  size="small"
                  variant="outlined"
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter mobile Number..."
                  component={TextField}
                />
              </FormControl>
            </div>

            <div className="form-parts">
              <FormControl className="upload-img">
                <FormLabel>Upload Image</FormLabel>
                <input
                  type="file"
                  name="studentImage"
                  id="studentImage"
                  onChange={(event) => {
                    props.setFieldValue("studentImage", event.target.files[0]);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Field
                  size="small"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password..."
                  component={TextField}
                  variant="outlined"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Field
                  size="small"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email..."
                  component={TextField}
                  variant="outlined"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Semester</FormLabel>

                <Field
                  as="select"
                  name="semester"
                  id="semester"
                  label="semester"
                >
                  {Array(7)
                    .fill("")
                    .map((_, i) => {
                      return (
                        <option value={i + 1 + ""} key={i}>
                          Semester {i + 1}
                        </option>
                      );
                    })}
                </Field>
              </FormControl>
            </div>
            <div className="form-parts">
              <FormControl>
                <FormLabel>University ID</FormLabel>
                <Field
                  size="small"
                  type="number"
                  variant="outlined"
                  name="universityID"
                  id="universityID"
                  placeholder="Enter University ID..."
                  component={TextField}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Library Card No.</FormLabel>
                <Field
                  size="small"
                  type="number"
                  variant="outlined"
                  name="libcardno"
                  id="libcardno"
                  placeholder="Enter Library Card no..."
                  component={TextField}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Year</FormLabel>
                <Field as="select" name="year" id="year" placeholder="Semester">
                  {Array(10)
                    .fill(2017)
                    .map((v, i) => {
                      return (
                        <option value={v + i} key={i}>
                          {v + i}
                        </option>
                      );
                    })}
                </Field>
              </FormControl>
            </div>

            <Button type="submit">Add Student</Button>
          </Form>
        )}
      </Formik>
    </StyledAddNewStudent>
  );
}

export default AddNewStudent;
