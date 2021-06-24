import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './components/BeaniesList';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
// import PaintingForm from './PaintingForm'

function App(props) {

  const [currentUser,setCurrentUser]=useState({
    id: 0,
    name:'',
    carts:[],

    })

  const setUser = (user) => {

    setCurrentUser({
      id: user.id,
      name: user.name,
      carts: user.carts
    })
    // CHANGE THE URL
    props.history.push("/beanies")

  }

  
  return (
    <div
    style={{
      backgroundColor: '#f0f8ff'}}>
        <NavBar
          title="beanies, baby!"
          icon="beanie baby"
          description="an app we made"
        />
      <Switch>
        <Route path={'/login'}
        render={routerProps => {
        return<div>
          <Login
          {...routerProps}setUser={setUser}>
          </Login>
          </div>
        }}>
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
