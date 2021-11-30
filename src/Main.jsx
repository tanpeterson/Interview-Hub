import React from 'react'
import { Route, Router, Switch } from "react-router";
import Home from './Home.jsx';
import Profile from './Profile.jsx';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/home' component={Home} /> 
      <Route exact path='/profile' component={Profile}> </Route>
      <Route exact path='/' component={Home}> </Route>
    </Switch>
  )
}

export default Main;