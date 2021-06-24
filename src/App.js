import React, { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './components/BeaniesList';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart'


function App(props) {




  const [currentUser,setCurrentUser]=useState({
    id: 0,
    name:'',
    })
    


    const [carts, setCarts] = useState([])

    useEffect( async () => {
        await fetch("http://localhost:9393/cart")
      .then((r) => r.json())
      .then((cartArray) => setCarts(cartArray));
      
      }, []);


  const setUser = (user) => {

    setCurrentUser({
      id: user.id,
      name: user.name,
      carts: user.carts
    })
    // CHANGE THE URL
    props.history.push("/beanies")
  }

  const addToCarts = (cart) => {
    setCarts(carts.concat(cart))
  }
console.log(currentUser)
  
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
        <Route path={'/cart'}
        render={routerProps => {
        return <div>
        <Cart
          {...routerProps}carts={carts}
          currentUser={currentUser}>
            
          </Cart>
          </div>
        }}>
        </Route>
        <Route path={'/beanies'}>
          <BeaniesList 
          user={currentUser}
          addToCarts={addToCarts}/>
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
