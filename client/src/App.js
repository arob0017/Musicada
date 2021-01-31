import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/style.css"
import Navbar from "./components/NavBar";
import NavNotUser from "./components/navNotUser";
import Landing from "./pages/landing";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout"
import { UserProvider, useUserContext } from './components/UserContext'

const Pages = () => {
  const { user } = useUserContext()
  console.log(user)
  return <Router>
    <div>
      {
        user &&
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Landing userData={user} />
          </Route>
        </Switch>
      }
      {
        !user &&
        <Switch>
          <Route exact path="/">
            <NavNotUser />
            <Login />
          </Route>
          <Route exact path="/register">
            <NavNotUser />
            <Register />
          </Route>
          <Route exact path="/logout">
            <NavNotUser />
            <Logout />
          </Route>
        </Switch>
      }
    </div>
  </Router>
}


const App = () => {

  return (
    <UserProvider>
      <Pages />
    </UserProvider>
  );
}

export default App;