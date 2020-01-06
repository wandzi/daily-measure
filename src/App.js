import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Root from './Components/Root/Root';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Informations from './Components/Informations/Informations';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Root}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/informations" component={Informations}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;