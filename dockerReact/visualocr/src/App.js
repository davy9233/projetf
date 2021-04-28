import React from 'react';
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'
 
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Navbar bg="light" expand="lg">
          <div className="header">
            <Nav> 
                <Nav.Link>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
                </Nav.Link>
                <Nav.Link>
                <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
                </Nav.Link> 
           </Nav>
          </div>
         </Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
         
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;