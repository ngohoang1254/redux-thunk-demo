import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Admin from "./containers/Admin";
import Home from "./containers/Home";
import { routesHome, routesAdmin } from './routes';
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <Home
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      })
    }
  }
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <Home
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      })
    }
  }
  return (
    <BrowserRouter>
      <Switch>

        {showLayoutHome(routesHome)};
        {/* <Route path = "/admin" component = {Admin}/> */}
        {showLayoutAdmin(routesAdmin)};
      </Switch>
    </BrowserRouter>
  );
}

export default App;
