import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Country from './components/pages/Country';
import Reservations from './components/pages/Reservations';
import ChoixPays from './components/pages/ChoixPays';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/reservations' component={Reservations} />
              <Route path='/choix-pays' component={ChoixPays} />
              <Route path='/pays/:country_slug' component={Country} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;