// App.js

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Settings from './Settings';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Settings">
            <Settings/>
          </Route>


        </Switch>
        







        </div>

      </div>
      </Router>
      





  );
}

export default App;




