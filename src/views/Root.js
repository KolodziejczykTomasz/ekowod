import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from '../views/HomeView';
import ContactView from "../views/ContactView";
import AboutView from "../views/AboutView";


const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/contact" component={ContactView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
