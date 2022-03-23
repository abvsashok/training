import React from 'react'
import { Switch, Route, Redirect, Router, Link, BrowserRouter } from "react-router-dom";

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';

function AppRouts() {
  return <BrowserRouter>
    <Link to="/home">Home</Link> <br />
    <Link to="/about">About</Link> <br />
    <Link to="/careers">Careers</Link>
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </BrowserRouter>
}

export default AppRouts
