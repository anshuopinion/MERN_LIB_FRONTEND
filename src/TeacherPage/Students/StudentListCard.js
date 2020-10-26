import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { StyledCard } from "../../elements";

const Card = styled(StyledCard)`
  text-align: center;

  .student-id {
    flex: 1;
  }
  .profile-img {
    flex: 2;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .name {
    flex: 4;
  }
  .semester {
    flex: 1;
  }
  .year {
    flex: 1;
  }
  .icons {
    display: flex;
    width: 90px;
    flex: 3;

    justify-content: space-around;
  }
`;

function StudentList({ students }) {
  return (
    <>
      {students.map((student) => (
        <>
          <Card>
            <span className="student-id">{student.data.library_card}</span>
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
                <FontAwesomeIcon
                  icon={faEdit}
                  size="2x"
                  // onClick={() => openHandler(book._id)}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faTrash}
                  size="2x"
                  // onClick={deleteBook}
                />
              </span>
            </div>
          </Card>
        </>
      ))}
    </>
  );
}

export default StudentList;
