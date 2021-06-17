import Home from "../pages/Home";
import { Route, Switch } from "react-router";
import PanelAdmin from '../components/admin/PanelAdmin';
import FormBlogs from '../components/admin/FormBlogs';
import Blog from '../models/blog.model';

function Routes() {

    const initialBlog: Blog = {
        Author: "",
        Excerpt: "",
        Image: {
            Content: "",
            Orientation: ""
        },
        Likes: 0,
        Tag: "",
        Title: "",
        Views: 0,
        createdAt: new Date().toISOString()
    }
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" exact>
        <PanelAdmin />
      </Route>
      <Route path="/createBlog" exact>
        <FormBlogs
            modelo={initialBlog}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
