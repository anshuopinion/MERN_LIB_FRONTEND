import React from "react";
import StudentProfile from "../components/student/StudentProfile";
import styled from "styled-components";
import BooksPanel from "../shared/components/BooksPanel/BooksPanel";
import PersonalBooks from "../components/student/PersonalBooks";
import RecentUpdates from "../components/student/RecentUpdates";
import SharedBooks from "../components/student/SharedBooks";
import { MainContainer, Background } from "../elements";



const StyledStudent = styled.div`
  display: grid;
  grid-template-areas:
    "student-profile book-panel book-panel"
    "recent-updates book-panel book-panel"
    "recent-updates my-book my-book"
    "recent-updates my-book my-book"
    "shared-book shared-book shared-book";
  grid-gap: 1rem;
`;

const Student = () => {
  
  return(
        <Background>
          <MainContainer>
            <StyledStudent>
              <StudentProfile />
              <BooksPanel disable />
              <PersonalBooks />
              <RecentUpdates />
              <SharedBooks />
            </StyledStudent>
          </MainContainer>
        </Background>
      )}
   


export default Student;
