import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Box, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { NavBar } from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main" width="100%" minHeight='100vh'>
        <HashRouter>
          <NavBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
