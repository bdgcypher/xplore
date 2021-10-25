import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Loader from './components/Loader/Loader';
import Footer from './components/Footer';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Camels from './pages/Camels';
import Treehouses from './pages/Treehouses';
import Rockclimbing from './pages/Rockclimbing';
import Van from './pages/Van';
import Peru from './pages/Peru';
import Careers from './pages/Careers';
import About from './pages/About';
import Photography from './pages/Photography';


function App() {
  return (
    <Router forceRefresh={true} >
      <Loader />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/destinations" component={Destinations} />
        <Route path="/camels" component={Camels} />
        <Route path="/treehouse" component={Treehouses} />
        <Route path="/rockclimbing" component={Rockclimbing} />
        <Route path="/van" component={Van} />
        <Route path="/machupicchu" component={Peru} />
        <Route path="/careers" component={Careers} />
        <Route path="/about" component={About} />
        <Route path="/photography" component={Photography} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;