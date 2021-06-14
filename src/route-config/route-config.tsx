import Home from "../pages/Home";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact >
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
