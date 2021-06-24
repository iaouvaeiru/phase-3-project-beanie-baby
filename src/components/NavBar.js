import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom'
import logo from '/Users/nicholasthomson/Development/code/Mod3/Phase-3-Project/frontend/phase-3-project-frontend/src/ty_logo.png'


function NavBar(props) {

    return (
        <div className="ui large menu">
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
              <div className="ui primary button">Log in</div>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default NavBar;