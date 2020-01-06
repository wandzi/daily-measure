import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Root from './Components/Root/Root';
import Signin from './Components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Root}/>
        <Route exact path="/signin" component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;