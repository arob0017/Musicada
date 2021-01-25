import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import API from "./utils/API"
import Navbar from "./components/nav";
import Landing from "./pages/landing";
import Register from "./components/register";
import Login from "./components/login";

class App extends Component {
  state = {
    user: null
  };
  login = (userData) => {
    API.login(userData).then((res) => {
      console.log(res);
      this.setState({
        user: res.data
      })
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {
            this.state.user &&

            <Switch>
              {/* <Route>
              <Login />
            </Route> */}
              <Route exact path="/">
                <Landing />
              </Route>
            </Switch>
          }
          {
            !this.state.user &&
            <Switch>
              <Route exact path="/">
                <Login login={this.login} />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          }
        </div>
      </Router>
    );
  }
}
export default App;