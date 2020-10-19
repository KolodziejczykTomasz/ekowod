import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from 'views/HomeView';
import ContactView from 'views/ContactView';
import AboutView from 'views/AboutView';
import TariffView from 'views/TariffView';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/contact" component={ContactView} />
        <Route exact path="/tariff" component={TariffView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
