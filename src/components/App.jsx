import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import FavList from "./FavList";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favlist" component={FavList} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
