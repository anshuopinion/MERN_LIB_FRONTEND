import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHttpClient } from "../../../hooks/http-hooks";
import { useStateValue } from "../../../Store";
import Spinner from "../../../shared/UI/Spinner";
// import AddNewStudent from "./AddNewStudent";
import StudentListCard from "../StudentCard/StudentListCard";
import ErrorModal from "../../../shared/UI/ErrorModal";
const StyledStudentControl = styled.section`
  border-radius: 1rem;
  margin-top: 1rem;
  grid-area: book-panel;
  padding: 4rem;
  background-color: ${(props) => props.theme.color.light};
  width: 900px;
  height: 600px;
  grid-area: studentControl;
`;

function StudentControls() {
  // const [loading, setLoading] = useState(true);
  const [{ userId, token }] = useStateValue();
  const { loading, sendRequest, error, clearError } = useHttpClient();
  const [loadedStudents, setLoadedStudents] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      await sendRequest("/students", "get", null, {
        Authorization: `${token}`,
      })
        .then((res) => {
          setLoadedStudents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchStudents();
  }, [token, sendRequest]);
  console.log(loadedStudents);
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner />
      ) : (
        <StyledStudentControl>
          <h3>Student Control Panel</h3>

          <StudentListCard students={loadedStudents} />
        </StyledStudentControl>
      )}
    </>
  );
}

export default StudentControls;
