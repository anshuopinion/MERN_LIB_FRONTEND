import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Login from "./components/Login";
import StudentPage from "./pages/Student";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import { useStateValue } from "./store";

import { useAuth } from "./hooks/auth-hooks";
import Home from "./pages/Home";
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

            <Route path="/login">
              <Login type="student" />
            </Route>
            <Route path="/tlogin">
              <Login type="teacher" />
            </Route>
            <Route path="/alogin">
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

export default App;
