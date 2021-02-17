import MainPage from "./MainPage";
import PostEvent from "./PostEvent";
import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/post" exact component={PostEvent} />
        </Switch>
        {/*<Switch>
        <Route path="/events" component={Events} />
      </Switch> */}
      </Router>
    </React.Fragment>
  );
};

export default Routes;
