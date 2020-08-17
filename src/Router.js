import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
