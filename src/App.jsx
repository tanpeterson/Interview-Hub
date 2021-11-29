import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Main from './Main.jsx'
import NavBar from './components/NavBar.jsx'
// import LogIn from './LogIn'
// import NavBar from './Components/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  )
};

