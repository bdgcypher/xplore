import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Camels from './pages/Camels';

import Loader from './components/Loader/Loader';
import Footer from './components/Footer';

function App() {
  return (
    <Router forceRefresh={true} >
      <Loader />
      <Navbar />
      <Switch>
        <Route path="/xplore/" component={Home} exact />
        <Route path="/xplore/destinations" component={Destinations} />
        <Route path="/xplore/camels" component={Camels} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;