import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Table from './components/Table';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/table" component={Table} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
