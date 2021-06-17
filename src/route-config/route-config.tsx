import Home from "../pages/Home";
import { Route, Switch } from "react-router";
import PanelAdmin from '../pages/admin/PanelAdmin';
import FormBlogs from '../pages/admin/FormBlogs';
import Blog from '../models/blog.model';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" exact>
        <PanelAdmin />
      </Route>
      <Route path="/createBlog" exact>
        <FormBlogs />
      </Route>
    </Switch>
  );
}

export default Routes;
