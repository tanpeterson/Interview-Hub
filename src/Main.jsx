import React from 'react'
import { Route, Router, Switch } from "react-router";
import Home from './Home.jsx';
import Profile from './Profile.jsx';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={() => (<Home />)}> </Route>
      <Route exact path='/Profile' component={() => (<Profile />)}> </Route>
    </Switch>
  )
}

export default Main;