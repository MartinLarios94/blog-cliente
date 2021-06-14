import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/utils/Navbar';
import rutas from './route-config/route-config';
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          {
            rutas.map(ruta => 
              <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
                <ruta.component />
              </Route>
            )
          }
        </Switch>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
