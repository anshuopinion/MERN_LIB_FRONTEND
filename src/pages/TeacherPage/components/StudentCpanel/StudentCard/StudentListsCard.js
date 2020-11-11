import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { StyledCard } from "../../../../../Elements";
import StudentCard from "./StudentCard";
const Card = styled(StyledCard)`
  text-align: center;
  .lib-card {
    flex: 2;
  }
  .profile-img {
    flex: 2;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .name {
    margin-left: 0.4rem;
    flex: 3;
    text-align: start;
  }
  .semester {
    flex: 2;
  }
  .year {
    flex: 1;
  }
  .icons {
    display: flex;
    width: 90px;
    flex: 5;

    justify-content: space-around;
  }
`;

function StudentList({
  students,
  createStudent,
  updateStudent,
  deleteStudentHandler,
}) {
  return (
    <>
      <Card>
        <i onClick={createStudent}>
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </i>
      </Card>
      {students.map((student) => (
        <>
          <StudentCard
            key={student._id}
            student={student}
            updateStudent={updateStudent}
            deleteStudentHandler={deleteStudentHandler}
          />
        </>
      ))}
    </>
  );
}

export default StudentList;
