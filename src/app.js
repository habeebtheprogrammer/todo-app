import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
