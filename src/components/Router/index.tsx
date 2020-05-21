import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "../../views/Homepage";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Router;
