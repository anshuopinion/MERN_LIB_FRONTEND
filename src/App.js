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
            <Route path="/teacher" component={Teacher} />
            <Route path="/admin" component={Admin} />
            {!token && <Route path="/login" component={Login} />}
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
