import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Carga } from "./pages/Carga";
import { Configuration } from "./pages/Configuration";
import { Manager } from "./pages/Manager";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manager" component={Manager} />
          <Route exact path="/manager/carga" component={Carga} />
          <Route path="/configuracion" component={Configuration} />
        </Switch>
      </div>
    );
  }
}
