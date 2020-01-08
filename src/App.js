import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Root from './Components/Root/Root';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Informations from './Components/Informations/Informations';
import Application from './Components/Application/Application';
import AddMeasure from './Components/AddMeasure/AddMeasure';
import Measurement from './Components/Measurement/Measurement';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Root}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/informations" component={Informations}/>
            <Route path="/dashboard" component={Application}/>
            <Route path="/addmeasure" component={AddMeasure}/>
            <Route path="/measurement" component={Measurement}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;