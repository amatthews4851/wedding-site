import * as React from "react";
import { Switch, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import OutOfTownPage from "./pages/OutOfTown";
import PhotosPage from "./pages/PhotosPage";

export enum Routes {
  Home = "/",
  Event = "/event",
  Photos = "/photos",
  OutOfTown = "/out-of-town",
}

const Router = () => {
  return (
    <Switch>
      <Route path={Routes.OutOfTown}>
        <OutOfTownPage />
      </Route>
      <Route path={Routes.Photos}>
        <PhotosPage />
      </Route>
      <Route path={Routes.Event}>
        <EventPage />
      </Route>
      <Route path={Routes.Home}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Router;
