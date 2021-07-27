import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
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
import WcagView from 'views/WcagView';
import AllNews from 'views/AllNews';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />   
        <Route path={routes.about} component={AboutView} />
        <Route path={routes.contact} component={ContactView} />
        <Route path={routes.allnews} component={AllNews} />
        <Route path={routes.hydrokol} component={HydroKolView} />
        <Route path={routes.tariff} component={TariffView} />
        <Route path={routes.hydrolw} component={HydroLwView} />
        <Route path={routes.hydrogi} component={HydroGiView} />
        <Route path={routes.hydrolub} component={HydroLubView} />
        <Route path={routes.download} component={DownloadView} />
        <Route path={routes.rodo} component={RodoView} />
        <Route path={routes.cookies} component={CookiesView} />
        <Route path={routes.oczyszczgi} component={OczyszczGiView} />
        <Route path={routes.oczyszczlub} component={OczyszczLubView} />
        <Route path={routes.oczyszczlw} component={OczyszczLwView} />
        <Route path={routes.oczyszczkol} component={OczyszczKolView} />
        <Route path={routes.wcag} component={WcagView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
