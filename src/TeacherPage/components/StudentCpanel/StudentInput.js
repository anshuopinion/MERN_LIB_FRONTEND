import React, { useState } from "react";
import { Field as F, Form, Formik } from "formik";
import { FormControl as FC, FormLabel as FL } from "@material-ui/core";
import styled from "styled-components";
// import { TextField } from "formik-material-ui";
import { SubmitButton } from "../../../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHttpClient } from "../../../hooks/http-hooks";
import { useStateValue } from "../../../Store";
import Spinner from "../../../shared/UI/Spinner";
import ErrorModal from "../../../shared/UI/ErrorModal";

const StyledAddNewStudent = styled.div``;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  .form-container {
    display: flex;
    align-items: center;
  }
  button {
    align-self: flex-end;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    margin-right: 1rem;
  }
  .crossBtn {
    align-self: flex-end;
    font-size: 3rem;
  }
`;
const FormControl = styled(FC)`
  //hide arrow from number input
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
const FormLabel = styled(FL)`
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;
const Field = styled(F)`
  width: 240px;

  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
`;
const LeftSide = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const RightSide = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid #000; */
`;
const Center = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid #000; */
  .image {
    background-color: ${(props) => props.theme.color.main};
    height: 200px;
    width: 150px;
    text-align: center;
  }
  .upload-input {
    border: 1px solid #000;
    padding: 0.25rem;
  }
`;

function StudentInput({
  closeCreate,
  closeUpdate,
  update,
  student,
  updateLoadedStudent,
  createLoadedStudent,
}) {
  const [tempForm, setTempForm] = useState();
  const { sendRequest, error, clearError, loading } = useHttpClient();
  const [{ token }] = useStateValue();
  let initialValues;

  if (update) {
    initialValues = {
      name: student?.name,
      student_id: student?.data.student_id,
      mobile: student?.data.mobile,
      library_card: student?.data.library_card,
      // student_image: undefiend,
      year: student?.data.year,
      semester: student?.data.semester,
      university_id: student?.data.university_id,
    };
  } else {
    initialValues = {
      name: tempForm?.name,
      student_id: tempForm?.student_id,
      mobile: tempForm?.mobile,
      library_card: tempForm?.library_card,
      // student_image: undefiend,
      semester: tempForm?.semester,
      email: tempForm?.email,
      password: tempForm?.password,
      year: tempForm?.year,
      university_id: tempForm?.university_id,
    };
  }
  const onSubmit = async (values) => {
    if (update) {
      const studentData = {
        name: values.name,
        student_id: values.student_id,
        mobile: values.mobile,
        library_card: values.library_card,
        semester: values.semester,
        year: values.year,
        university_id: values.university_id,
      };

      await sendRequest(`/students/${student._id}`, "patch", studentData, {
        Authorization: `${token}`,
      }).then((res) => updateLoadedStudent(res.data));
    } else {
      const studentData = {
        name: values.name,
        student_id: values.student_id,
        mobile: values.mobile,
        library_card: values.library_card,
        semester: values.semester,
        year: values.year,
        email: values.email,
        password: values.password,
        university_id: values.university_id,
      };
      setTempForm(studentData);
      await sendRequest("/students/signup", "post", studentData, {
        Authorization: `${token}`,
      }).then((res) => {
        createLoadedStudent(res.data);
      });
    }
  };
  return (
    <StyledAddNewStudent>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner />
      ) : (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <StyledForm className="form">
              <FontAwesomeIcon
                className="crossBtn"
                icon={faTimes}
                onClick={update ? closeUpdate : closeCreate}
                size="2x"
              />
              <div className="form-container">
                <LeftSide>
                  <FormControl>
                    <FormLabel>Name:-</FormLabel>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name....."
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Student ID:-</FormLabel>
                    <Field
                      type="number"
                      name="student_id"
                      id="student_id"
                      placeholder="Enter Student ID..."
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile No:-</FormLabel>
                    <Field
                      type="number"
                      name="mobile"
                      id="mobile"
                      placeholder="Enter Mobile No..."
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Library Card No:-</FormLabel>
                    <Field
                      type="number"
                      name="library_card"
                      id="library_card"
                      placeholder="Library Card No....."
                    />
                  </FormControl>
                </LeftSide>
                <Center>
                  <div className="image">Image Preview</div>
                  {/* <FormControl>
                  <FormLabel>Upload Image</FormLabel>
                  <input
                    className="upload-input"
                    type="file"
                    name="student_image"
                    id="student_image"
                    onChange={(event) => {
                      props.setFieldValue(
                        "student_image",
                        event.target.files[0]
                      );
                    }}
                  />
                </FormControl> */}
                  {!update && (
                    <FormControl>
                      <FormLabel>Semester:-</FormLabel>
                      <Field
                        type="number"
                        name="semester"
                        id="semester"
                        placeholder="Enter Semester"
                      />
                    </FormControl>
                  )}
                </Center>
                <RightSide>
                  {!update && (
                    <>
                      <FormControl>
                        <FormLabel>Email:-</FormLabel>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Email"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Password:-</FormLabel>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter Password"
                        />
                      </FormControl>
                    </>
                  )}
                  {update && (
                    <FormControl>
                      <FormLabel>Semester:-</FormLabel>
                      <Field
                        type="number"
                        name="semester"
                        id="semester"
                        placeholder="Enter Semester"
                      />
                    </FormControl>
                  )}
                  <FormControl>
                    <FormLabel>Year:-</FormLabel>
                    <Field
                      type="number"
                      name="year"
                      id="year"
                      placeholder="Enter Year"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>University ID:-</FormLabel>
                    <Field
                      type="number"
                      name="university_id"
                      id="university_id"
                      placeholder="Enter University ID"
                    />
                  </FormControl>
                </RightSide>
              </div>
              <SubmitButton type="submit">Add Student</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      )}
    </StyledAddNewStudent>
  );
}

export default StudentInput;
