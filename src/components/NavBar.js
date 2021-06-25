import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom'
import logo from '../ty_logo.png'


function NavBar(props) {

    return (
        <div className="ui large menu"
        style={{
          backgroundColor: '#ffff66'}}>
        <Link to={'/'}>
          <a className="item">
            <img src={logo}/>
          </a>
        </Link>
        <Link to={'/beanies'}>
          <a className="item">
            Beanie Babies
          </a>
        </Link>
        <div className="right menu">
        <Link to={'/cart'}>
            <div className="item">
              <div className="ui primary button">Cart</div>
            </div>
          </Link>
          <Link to={'/login'}>
            <div className="item">
              <div 
                className="ui primary button"
                onClick={props.toggleLoginState}>{props.loginState.loggedIn ? "Log out" : "Log in"}</div>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default NavBar;