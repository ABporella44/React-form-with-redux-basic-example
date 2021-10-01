import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from "./components/loginForm"
import Homepage  from './components/homepage';
import { BrowserRouter as Router, Route, Redirect, Switch,Link, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/Login" component={Login}/>
      <Route path="/Registration" component={Registration}/> 
      <Route path="/Homepage" component={Homepage}/>  
      </Switch>
   </div>
    </BrowserRouter>
 
  );
}

export default App;
