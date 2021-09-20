import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Viewer from './pages/Viewer';
import Rules from './pages/Rules';
export default function App() {
  return (
    <div>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/viewer">
              <Viewer />
            </Route>
            <Route path="/rules">
              <Rules />
            </Route>
            <Route path="/" exact>
              <Login />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
