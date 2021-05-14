import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import Camera from '../Camera/cam';
import Historique from '../Historique/hist';
import useToken from './useToken';
import ButtonSortie from '../../ui/ButtonExit';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/camera">camera</Link>
          </li>
          <li>
            <Link to="/historique">historique</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Preferences">parametre</Link>
          </li>

        </ul>
      </div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Preferences">
            <Preferences />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/historique">
            <Historique />
          </Route>
        </Switch>
      </BrowserRouter>
    
      <div className="buttonSortie">
        <ButtonSortie />
      </div>




    </div>




  );
}

export default App;