import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom'


function NavBar(props) {

    return (
        <div className="ui large menu">
        <Link to={'/'}>
          <a className="item">
            Home
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