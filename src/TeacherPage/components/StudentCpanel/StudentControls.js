import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHttpClient } from "../../../hooks/http-hooks";
import { useStateValue } from "../../../Store";
import Spinner from "../../../shared/UI/Spinner";
import StudentInput from "./StudentInput";
import StudentListCard from "./StudentCard/StudentListCard";
import ErrorModal from "../../../shared/UI/ErrorModal";
import StudentListHead from "./StudentListHead";
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
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const { loading, sendRequest, error, clearError } = useHttpClient();
  const [loadedStudents, setLoadedStudents] = useState([]);
  const [editStudent, setEditStudent] = useState();
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

  const updateStudent = (student) => {
    setUpdate(true);
    setOpen(true);
    setEditStudent(student);
  };
  const closeUpdateStudent = () => {
    setUpdate(false);
    setOpen(false);
  };
  const createStudent = () => {
    setOpen(true);
  };
  const closeCreateStudent = () => {
    setOpen(false);
  };
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner />
      ) : (
        <StyledStudentControl>
          <h3>Student Control Panel</h3>
          {open ? (
            <StudentInput
              closeCreate={closeCreateStudent}
              update={update}
              closeUpdate={closeUpdateStudent}
              student={editStudent}
            />
          ) : (
            <>
              <StudentListHead />
              <StudentListCard
                students={loadedStudents}
                updateStudent={updateStudent}
                createStudent={createStudent}
              />
            </>
          )}
        </StyledStudentControl>
      )}
    </>
  );
}

export default StudentControls;
