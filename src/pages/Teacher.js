import React from "react";
import styled from "styled-components";
import BooksPanel from "../shared/components/BooksPanel/BooksPanel";

import LibraryStatus from "../components/teacher/LibraryStatus";
import StudentControls from "../components/teacher/StudentControls";
import TeacherProfile from "../components/teacher/TeacherProfile";
import { MainContainer, Background } from "../elements";

const StyledTeacher = styled.div`
  display: grid;
  background-color: #000;
  grid-template-areas:
    "student-profile book-panel book-panel"
    "libStatus book-panel book-panel"
    "libStatus studentControl studentControl"
    "recent-updates studentControl studentControl"
    "shared-book shared-book shared-book";
  grid-gap: 1rem;
`;

const Teacher = () => {
  return (
    <Background>
      <MainContainer>
        <StyledTeacher>
          <TeacherProfile />
          <BooksPanel />
          <LibraryStatus />
          <StudentControls />
        </StyledTeacher>
      </MainContainer>
    </Background>
  );
};

export default Teacher;
