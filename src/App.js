import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import StudentPage from "./pages/Student";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import { useStateValue } from "./store";
import cookie from "js-cookie";
import { useAuth } from "./hooks/auth-hooks";
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
            {/* {token && ( */}
            <Route path="/student">
              <StudentPage />
            </Route>
            {/* )} */}

            <Route path="/teacher">
              <Teacher />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            {/* {!token && ( */}
            <Route exact path="/">
              <Login />
            </Route>
            {/* )} */}
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
