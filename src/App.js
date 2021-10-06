import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <Switch>
        <Route path="/xplore/" component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;