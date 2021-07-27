import React from 'react';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ClownList from './pages/ClownList';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <div className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/list">Clown List</Link>
              </li>
            </ul>
          </div>

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
      </BrowserRouter>
    </Provider>
);
}

export default App;
