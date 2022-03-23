import logo from './logo.svg';
import './App.css';
import Buttoncomponent from './components/btncomponent/Buttoncomponent';
import Cardcomponent from './components/cardcomponent/Cardcomponent';
import AppRouts from './AppRouts';
import TableComponent from './components/tablecomponent/TableComponent';
function App() {
  return (
    <div className="">
      <Buttoncomponent buttontext="click me"></Buttoncomponent>
      <Cardcomponent cardheading="card heading" cardbody="card body" cardtitle="card title"></Cardcomponent>
      <AppRouts />
      <TableComponent></TableComponent>
    </div>
  );
}

export default App;
