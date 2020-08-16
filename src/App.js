import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./components/Home";
import Default from "./components/Default";
import Contact from "./components/Contact";
import Navigation from "./components/partials/navbar/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
