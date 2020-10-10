import React from 'react';
import Main from "./scripts/pages/Main/Main";
import Home from "./scripts/components/Home/Home";
import Login from "./scripts/components/Login/Login";
import Register from "./scripts/components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './scripts/components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;