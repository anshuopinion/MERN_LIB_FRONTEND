import React from "react";
import styled from "styled-components";
import { StyledCard } from "../../../../../Elements";
import { useHttpClient } from "../../../../../hooks/http-hooks";
import ErrorModal from "../../../../../shared/UI/ErrorModal";
import Spinner from "../../../../../shared/UI/Spinner";
import { useStateValue } from "../../../../../Store";
import {
  faEdit,
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function StudentCard({ student, deleteStudentHandler, updateStudent }) {
  const { error, sendRequest, clearError, loading } = useHttpClient();
  const [{ token }] = useStateValue();

  const deleteStudent = async (student) => {
    await sendRequest(`/students/${student._id}`, "delete", null, {
      Authorization: `${token}`,
    }).then((res) => {
      deleteStudentHandler(student._id);
    });
  };
  const onEdit = () => {
    updateStudent(student);
  };
  return (
    <Card>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <span className="lib-card">{student.data.library_card}</span>
          <span className="profile-img">
            <img
              src="https://cloudblogs.microsoft.com/industry-blog/wp-content/uploads/industry/sites/22/2019/08/tomhickling_avatar_1565623346.png"
              alt="man"
            />
          </span>
          <span className="name">{student.name}</span>
          <span className="semester">{student.data.semester}</span>
          <span className="year">{student.data.year}</span>
          <div className="icons">
            <span>
              <FontAwesomeIcon icon={faEdit} size="2x" onClick={onEdit} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInfoCircle} size="2x" onClick="" />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
                onClick={() => deleteStudent(student)}
              />
            </span>
          </div>
        </>
      )}
    </Card>
  );
}

export default StudentCard;
