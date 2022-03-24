import React from 'react'
import { Switch, Route, Redirect, Router, Link, BrowserRouter } from "react-router-dom";

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import TableComponent from './components/tablecomponent/TableComponent';

function AppRouts() {
  return <BrowserRouter>
  <div className='d-flex justify-content-around'>
    <Link to="/home">Home</Link> <br />
    <Link to="/about">About</Link> <br />
    <Link to="/contact">Contact</Link>
    <Link to="/table">Table</Link>

  </div>
   
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/table" component={TableComponent} />

    </Switch>
  </BrowserRouter>
}

export default AppRouts
