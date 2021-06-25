import React, { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './components/BeaniesList';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart'


function App(props) {

  const[beanies, setBeanies]=useState([])


  const [currentUser,setCurrentUser]=useState({
    id: 0,
    name:'',
    })
    
  const [loginState, setLoginState] = useState({
    loggedIn: false
  })

  const toggleLoginState = () => {
    setLoginState({
      loggedIn: !loginState
    })
  }

  const [carts, setCarts] = useState([])

    useEffect( async () => {
        await fetch("http://localhost:9393/cart")
      .then((r) => r.json())
      .then((cartArray) => {
        console.log(cartArray)
        setCarts(cartArray)});
      }, []);

      

      useEffect(() => {
        fetch("http://localhost:9393/beanies")
      .then((r) => r.json())
      .then((beaniesArray) => setBeanies(beaniesArray));
    
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
    console.log(cart)
    setCarts([...carts, cart])
  }

  const checkCartExistence = (cart) => {
    if (carts.some(cart_obj => cart_obj.id == cart.id)){
      updateCartsState(cart)
    } else {
      addToCarts(cart)
    }
  }

  const deleteFromCart = (beanie_id) => {
    const newCart = carts.filter (cart => {
      return cart.beanie_baby_id !== beanie_id
    })
    setCarts(newCart)
  }

  const updateCartsState = (updatedCart) => {
    const newCart = carts.map(cart => {
      if (cart.id === updatedCart.id){
        return updatedCart
      } else {
        return cart
      }
    })
    setCarts(newCart)
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
          loginState={loginState}
          toggleLoginState={toggleLoginState}
        />
      <Switch>
        <Route path={'/login'}
        render={routerProps => {
        return<div>
          <Login
          {...routerProps}setUser={setUser}
          toggleLoginState={toggleLoginState}>
          </Login>
          </div>
        }}>
        </Route>
        <Route path={'/cart'}
        render={routerProps => {
        return <div>
        <Cart
          {...routerProps}carts={carts}
          currentUser={currentUser}
          beanies={beanies}
          deleteFromCart={deleteFromCart}
          updateCartsState={updateCartsState}
            >
          </Cart>
          </div>
        }}>
        </Route>
        <Route path={'/beanies'}>
          <BeaniesList 
          beanies={beanies}
          user={currentUser}
          addToCarts={addToCarts}
          checkCartExistence={checkCartExistence}
          />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
