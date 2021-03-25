import MainPage from "./MainPage";
import PostEvent from "./PostEvent";
import Events from "./Events";
import Login from "./Login";
import Register from "./Register";
import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/post" exact component={PostEvent} />
        <Route path="/events" exact component={Events} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
