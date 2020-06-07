import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
//pages
import Home from "./pages/Home";
import ListaPokemon from "./pages/ListaPokemon";
import Buscar from "./pages/Buscar";
import BuscarPokemon from "./pages/BuscarPokemon";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <div  className="container-fluid" >
        <Switch >
          <Route exact={true} path="/listapokemon" component={ListaPokemon} />
          <Route exact={true} path="/buscar" component={Buscar} />
          <Route exact={true} path="/buscarpokemon" component={BuscarPokemon} />
          <Route exact={true} path="/" component={Home} />
        </Switch>

        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
