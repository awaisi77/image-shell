import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Asset from "./components/Assets/Asset";
import Assets from "./components/Assets/Assets";
import CreateCollection from "./components/Collection/CreateCollection";
import ViewCollectionPage from "./components/Collection/ViewCollectionPage";
import NavBarCustom from "./components/NavbarCustom/NavBarComponent";

import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import CreateItem from "./components/Item/CreateItem";
function App() {
  return (
    <Router>
      <NavBarCustom></NavBarCustom>
      <Switch>
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/assets" exact component={Assets} />
        <Route path="/assets/:id" exact component={Asset} />
        <Route path="/collections" exact component={CreateCollection} />
        <Route
          path="/collections/:name/assets/edit"
          exact
          component={ViewCollectionPage}
        />
        <Route
          path="/collection/:id/item/create"
          exact
          component={CreateItem}
        />
      </Switch>
    </Router>
  );
}

export default App;
