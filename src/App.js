import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import { useStateValue } from "./Store";
import { useAuth } from "./hooks/auth-hooks";
import { ThemeProvider } from "styled-components";
import Login from "./shared/Login";
import StudentPage from "./pages/StudentPage/Student";
import Teacher from "./pages/TeacherPage/Teacher";
import Admin from "./pages/AdminPage/Admin";
import Home from "./pages/HomePage/Home";
function App() {
  const [{ token, role }] = useStateValue();
  const { setCookieLogin } = useAuth();

  useEffect(() => {
    setCookieLogin();
  }, [setCookieLogin]);
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            {token && role === "student" && (
              <Route path="/student" component={StudentPage} />
            )}
            {token && role === "teacher" && (
              <Route path="/teacher" component={Teacher} />
            )}
            {token && role === "admin" && (
              <Route path="/admin" component={Admin} />
            )}

            <Route path="/student-login">
              <Login type="student" />
            </Route>
            <Route path="/teacher-login">
              <Login type="teacher" />
            </Route>
            <Route path="/admin-login">
              <Login type="admin" />
            </Route>

            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default hot(App);
