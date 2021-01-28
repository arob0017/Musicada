import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/style.css"
import axios from 'axios'
import API from "./utils/API"
import Navbar from "./components/nav";
import Landing from "./pages/landing";
import Register from "./components/register";
import Login from "./components/login";
import { UserProvider, useUserContext } from './components/UserContext'

const Pages = () => {
  const { user } = useUserContext()
  console.log(user)
  return <Router>
    <div>
      <Navbar />
      {


        user &&
        <Switch>
          <Route exact path="/">
            <Landing userData={user} />
          </Route>
        </Switch>
      }
      {
        !user &&
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      }
    </div>
  </Router>
}


const App = () => {
  // componentDidMount = () => {
  //   this.getProfileData();
  // }
  // getProfileData = () => {
  //   axios.get(API).then((response) => {
  //     const data = response.data;
  //     this.setState({ userData: data })
  //     console.log('Data has been recieved')
  //   })
  //     .catch((err) => {
  //       console.log("error, data not recieved")
  //     })
  // }

  return (
    <UserProvider>
      <Pages />
    </UserProvider>
  );
}

export default App;