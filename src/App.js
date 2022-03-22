import logo from './logo.svg';
import './App.css';
import Buttoncomponent from './components/btncomponent/Buttoncomponent';
import Cardcomponent from './components/cardcomponent/Cardcomponent';
import CardBig from './components/cardcomponent/CardBig';
import AppRouts from './AppRouts';
import Header from './components/Shared/Header';
import { Switch, Route, Redirect, Router,Link,BrowserRouter} from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
function App() {
  return (
    <div className="">
     <Buttoncomponent buttontext="click me"></Buttoncomponent>
     <Cardcomponent cardheading="card heading" cardbody="card body" cardtitle="card title"></Cardcomponent>
    {/* <Header></Header> */}
    {/* <AppRouts></AppRouts>
     */}
     <BrowserRouter>
    <Router>     
       <Link to="/home">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/careers">Careers</Link>
    <Switch>
       <Route exact path="/home" component={HomePage} />
       <Route exact path="/about" component={AboutPage} />
       <Route exact path="/contact" component={ContactPage} />
       </Switch>
     </Router>  
     </BrowserRouter>
    </div>
  );
}

export default App;
