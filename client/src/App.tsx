import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle, theme } from "Utility/resets.style";

import Nav from "Component/Nav/Nav";
import Footer from "Component/Footer/Footer";
import {
  AnimatedRoutes,
  RouteTransition,
} from "Component/routes/RouteTransition";

import { ApiContextProvider } from "Context/ApiContext";
import { UserContextProvider } from "Context/UserContext";

import Login from "View/Login/Login";
import Feed from "View/Feed/Feed";
import Register from "View/Register/Register";
import UserProfile from "View/UserProfile/UserProfile";
import EditUser from "View/EditUser/EditUser";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ApiContextProvider>
        <UserContextProvider>
          <GlobalStyle />
          <Router>
            <Nav />
            <AnimatedRoutes>
              <RouteTransition exact path="/login">
                <Login />
              </RouteTransition>
              <RouteTransition exact path="/home">
                <Feed />
              </RouteTransition>
              <RouteTransition exact path="/register">
                <Register />
              </RouteTransition>
              <RouteTransition path="/user/profile/:id">
                <UserProfile />
              </RouteTransition>
              <RouteTransition path="/user/edit/:id">
                <EditUser />
              </RouteTransition>
            </AnimatedRoutes>
            <Footer />
          </Router>
        </UserContextProvider>
      </ApiContextProvider>
    </ThemeProvider>
  );
}

export default App;
