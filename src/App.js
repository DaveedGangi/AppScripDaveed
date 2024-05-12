import{Component} from "react"

import {Route,Switch} from "react-router-dom"

import Home from "./Home"

import './App.css';

class App extends Component{

  render(){
  return (
    <div>
     <Switch>
      <Route exact path="/" component={Home}/>
     </Switch>
    </div>
  );
}
}

export default App;
