import React, { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import styled from "styled-components";
import BooksPanel from "../shared/BooksPanel/BooksPanel";
import PersonalBooks from "./PersonalBooks";
import RecentUpdates from "./RecentUpdates";
import SharedBooks from "./SharedBooks";
import { MainContainer, Background } from "../elements";
import { useStateValue } from "../store";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hooks";

import ErrorModal from "../shared/UI/ErrorModal";
import Spinner from "../shared/UI/Spinner";
import { useAuth } from "../hooks/auth-hooks";

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
  const [{ userId, token }] = useStateValue();
  const [loading, setLoading] = useState(true);
  const { sendRequest, error, clearError } = useHttpClient();
  const { logout } = useAuth();
  const [loadedUser, setLoadedUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      await sendRequest(`/students/${userId}`, "get", null, {
        Authorization: `${token}`,
      })
        .then((res) => {
          setLoadedUser(res.data);
          setLoading(false);
        })
        .catch((err) => {});
    };
    if (userId) {
      fetchUser();
    }
    if (!token) {
      history.replace("/");
    }
  }, [userId, sendRequest, history, token]);
  const signout = () => {
    logout();
  };

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {loading ? (
        <Spinner fullPage />
      ) : (
        <Background>
          <MainContainer>
            <StyledStudent>
              <StudentProfile signout={signout} user={loadedUser} />
              <BooksPanel disable />
              <PersonalBooks />
              <RecentUpdates />
              <SharedBooks />
            </StyledStudent>
          </MainContainer>
        </Background>
      )}
    </>
  );
};

export default Student;
