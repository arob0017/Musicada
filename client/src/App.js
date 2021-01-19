import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


import Navbar from "./components/nav";
import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route>
              <Login />
            </Route>
            <Route>
              <Register />
            </Route>
            <Route>
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;