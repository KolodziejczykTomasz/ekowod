import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from 'views/HomeView';
import ContactView from 'views/ContactView';
import AboutView from 'views/AboutView';
import TariffView from 'views/TariffView';
import HydroLwView from 'views/HydroLwView';
import HydroGiView from 'views/HydroGiView';
import HydroKolView from 'views/HydroKolView';
import HydroLubView from 'views/HydroLubView';
import OczyszczLwView from 'views/OczyszczLwView';
import OczyszczGiView from 'views/OczyszczGiView';
import OczyszczKolView from 'views/OczyszczKolView';
import OczyszczLubView from 'views/OczyszczLubView';
import DownloadView from 'views/DownloadView';
import RodoView from 'views/RodoView';
import CookiesView from 'views/CookiesView';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/contact" component={ContactView} />
        <Route exact path="/hydrokol" component={HydroKolView} />
        <Route exact path="/tariff" component={TariffView} />
        <Route exact path="/hydrolw" component={HydroLwView} />
        <Route exact path="/hydrogi" component={HydroGiView} />
        <Route exact path="/hydrolub" component={HydroLubView} />
        <Route exact path="/download" component={DownloadView} />
        <Route exact path="/rodo" component={RodoView} />
        <Route exact path="/cookies" component={CookiesView} />
        <Route exact path="/oczyszczgi" component={OczyszczGiView} />
        <Route exact path="/oczyszczlub" component={OczyszczLubView} />
        <Route exact path="/oczyszczlw" component={OczyszczLwView} />
        <Route exact path="/oczyszczkol" component={OczyszczKolView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
