import Home from "../pages/Home";
import { Route, Switch } from "react-router";
import PanelAdmin from '../components/admin/PanelAdmin';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" exact>
        <PanelAdmin />
      </Route>
    </Switch>
  );
}

export default Routes;
