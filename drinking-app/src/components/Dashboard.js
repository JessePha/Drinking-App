import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Explorer from "./Explore";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Dashboard = () => {
  return (
    <Router>
      <div id="Dashboard">
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/explorer" exact={true} component={Explorer} />
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
