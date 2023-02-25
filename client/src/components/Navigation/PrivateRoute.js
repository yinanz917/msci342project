import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import Landing from "../Landing";
import Matches from "../Matches";
import Chat from "../Chat";
import Starred from "../Starred";
import history from './history';

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    // The first Landing page with filepath "/" is used for initial render
    // and the second Landing page with filepath "/landing" is used to go
    // back to landing after using AppBar to navigate to different page
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/matches" exact component={Matches} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/starred" exact component={Starred} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </Router>
  );
}