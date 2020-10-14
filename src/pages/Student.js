import React, { useEffect, useState } from "react";
import StudentProfile from "../components/student/StudentProfile";
import styled from "styled-components";
import BooksPanel from "../shared/components/BooksPanel/BooksPanel";
import PersonalBooks from "../components/student/PersonalBooks";
import RecentUpdates from "../components/student/RecentUpdates";
import SharedBooks from "../components/student/SharedBooks";
import { MainContainer, Background } from "../elements";
import { actionTypes, useStateValue } from "../store";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hooks";

import ErrorModal from "../shared/components/ErrorModal";
import Spinner from "../components/UI/Spinner";

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
  const [{ logout, userId }] = useStateValue();
  const [loadedUser, setLoadedUser] = useState();
  const { sendRequest, error, clearError, loading } = useHttpClient();
  const history = useHistory();
  const signout = () => {
    logout();
    history.replace("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await sendRequest(`/students/${userId}`, "get");
      setLoadedUser(data);
    };
    fetchUser();
  }, [sendRequest, userId]);
  return (
    <Background>
      <ErrorModal error={error} onClose={clearError} />
      <MainContainer>
        {loading ? (
          <Spinner fullPage />
        ) : (
          <StyledStudent>
            <StudentProfile signout={signout} user={loadedUser} />
            <BooksPanel disable />
            <PersonalBooks />
            <RecentUpdates />
            <SharedBooks />
          </StyledStudent>
        )}
      </MainContainer>
    </Background>
  );
};

export default Student;
