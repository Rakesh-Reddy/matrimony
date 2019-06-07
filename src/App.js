import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
// import Carousell from './Carousell';
import Home from './Home';
import Header from './Header';
import ProfileListing from './ProfileListing';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <br />
        <div>
          <Link to="/profileList">list</Link>
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profileList" component={ProfileListing} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
