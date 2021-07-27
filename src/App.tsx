import React from 'react';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ClownList from './pages/ClownList';
import store from './store/store';
import { Provider } from 'react-redux';
import { Button } from '@material-ui/core';

function App() {

  const goTo = (path: string) => {
    window.location.assign(path);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <div className="header">
            <ul className="nav">
              <li>
                <Button onClick={() => goTo("/")}>Home</Button>
              </li>
              <li>
                <Button onClick={() => goTo("/register")}>Register</Button>
              </li>
              <li>
                <Button onClick={() => goTo("/list")}>Clown List</Button>
              </li>
            </ul>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/list">
                <ClownList />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
);
}

export default App;
