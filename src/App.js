import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import StudentPage from "./pages/Student";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/student">
              <StudentPage />
            </Route>
            <Route path="/teacher">
              <Teacher />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
