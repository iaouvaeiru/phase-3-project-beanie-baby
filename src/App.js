import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './components/BeaniesList';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
// import PaintingForm from './PaintingForm'

function App() {

  
  return (
    <div>
        <NavBar
          title="beanies, baby!"
          icon="beanie baby"
          description="an app we made"
        />
      <Switch>
        <Route path={'/login'}>
          <Login></Login>
        </Route>
        <Route path={'/cart'}>

        </Route>
        <Route path={'/beanies'}>
          <BeaniesList />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
