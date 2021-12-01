import React from 'react'
import { Route, Router, Switch } from "react-router";
import MockInterview from './components/MockInterview.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/home' component={Home} /> 
      <Route exact path='/profile' component={Profile} /> 
      <Route exact path='/mockInterview' component={MockInterview} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default Main;