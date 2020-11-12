import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BooksPanel from "../../shared/BooksPanel/BooksPanel";

import LibraryStatus from "./components/LibraryStatus";
import StudentControls from "./components/StudentCpanel/StudentControls";
import TeacherProfile from "./components/TeacherProfile";
import { MainContainer, Background } from "../../Elements";
import { useStateValue } from "../../Store";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth-hooks";
import { useHttpClient } from "../../hooks/http-hooks";
import ErrorModal from "../../shared/UI/ErrorModal";
import Spinner from "../../shared/UI/Spinner";

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
  const [{ userId, token }] = useStateValue();
  const [loading, setLoading] = useState(true);
  const { sendRequest, error, clearError } = useHttpClient();
  const { logout } = useAuth();
  const [loadedUser, setLoadedUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      await sendRequest(`/teachers/${userId}`, "get", null, {
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
      
          <MainContainer>
            <StyledTeacher>
              <TeacherProfile signout={signout} user={loadedUser} />
              <BooksPanel />
              <LibraryStatus />
              <StudentControls />
            </StyledTeacher>
          </MainContainer>
     
      )}
    </>
  );
};

export default Teacher;
