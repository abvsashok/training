import logo from './logo.svg';
import './App.css';
import Buttoncomponent from './components/btncomponent/Buttoncomponent';
import Cardcomponent from './components/cardcomponent/Cardcomponent';
import CardBig from './components/cardcomponent/CardBig';

function App() {
  return (
    <div className="">
     <Buttoncomponent buttontext="click me"></Buttoncomponent>
     <Cardcomponent cardheading="card heading" cardbody="card body" cardtitle="card title"></Cardcomponent>
    </div>
  );
}

export default App;
