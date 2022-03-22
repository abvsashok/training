import React from 'react'
import { Switch, Route, Redirect, Router,BrowserRouter } from "react-router-dom";

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';

function AppRouts() {
  return (
    <div>
      {/* <BrowserRouter>
                <Route exact path="home" component={HomePage} />
                <Route exact path="about" component={AboutPage} />
                <Route exact path="contact" component={ContactPage} />   
       </BrowserRouter>           */}
    </div>
  )
}

export default AppRouts
