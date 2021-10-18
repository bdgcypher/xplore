import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Camels from './pages/Camels';
import Treehouses from './pages/Treehouses';
import Rockclimbing from './pages/Rockclimbing';
import Van from './pages/Van';
import Peru from './pages/Peru';

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
        <Route path="/xplore/treehouse" component={Treehouses} />
        <Route path="/xplore/rockclimbing" component={Rockclimbing} />
        <Route path="/xplore/van" component={Van} />
        <Route path="/xplore/machupichu" component={Peru} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;