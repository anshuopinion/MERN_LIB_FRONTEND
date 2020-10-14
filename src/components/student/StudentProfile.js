import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { faBookReader } from "@fortawesome/free-solid-svg-icons/faBookReader";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { Button, Card } from "@material-ui/core";
import styled from "styled-components";

const Icon = styled.i`
  text-align: center;
  vertical-align: center;
  font-size: 1.3rem;
  width: 40px;
`;
const Container = styled.section`
  border-radius: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  grid-area: student-profile;
  width: 300px;
  height: 550px;
  background-color: ${(props) => props.theme.color.light};
  padding-top: 2rem;
`;

const User = styled.div`
  display: flex;
  margin: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;
  .profile-pic {
    font-size: 5rem;
  }
  .name {
    font-size: 1.5rem;
    margin-left: 1rem;

    align-self: flex-end;
    margin-bottom: 1rem;
  }
`;

const StyledCard = styled(Card)`
  /* padding: 0.5rem 0.5rem; */
  display: flex;
  background-color: #60ddd5;
  margin: auto 1rem;
  align-items: center;
  height: 40px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  .card-details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    .key {
      text-align: left;
      text-transform: capitalize;
      align-self: flex-end;
    }
    .value {
      text-align: right;

      align-self: flex-end;
    }
  }
`;

const StudentProfile = ({ signout, user }) => {
  const studentDetails = [
    { icon: faUser, key: "student id", value: user.data.student_id },
    // {icon:faEnvelopeOpen,key:'email',value:user.email},
    { icon: faMobile, key: "mobile no.", value: user.data.mobile },
    {
      icon: faUniversity,
      key: "university id",
      value: user.data.university_id,
    },
    { icon: faBookReader, key: "library card", value: user.data.library_card },
    { icon: faCalendarAlt, key: "semester", value: user.data.semester },
    { icon: faCalendarDay, key: "year", value: user.data.year },
  ];

  console.log(user);
  return (
    <>
      {user && (
        <Container>
          <User>
            <div className="profile-pic">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <p className="name">{user?.name}</p>
          </User>

          {studentDetails.map((detail) => (
            <StyledCard key={detail.key}>
              <Icon>
                <FontAwesomeIcon icon={detail.icon} />
              </Icon>
              <div className="card-details">
                <span className="key">{detail.key}</span>
                <span className="value">
                  {(detail.key === "semester" && detail.value + "th") ||
                    detail.value}
                </span>
              </div>
            </StyledCard>
          ))}
          <span>
            <Button onClick={signout}>SignOut</Button>
          </span>
        </Container>
      )}
    </>
  );
};

export default StudentProfile;
