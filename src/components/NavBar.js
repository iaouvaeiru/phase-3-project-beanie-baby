import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom'


function NavBar(props) {

    return (
        <div class="ui large menu">
        <Link to={'/'}>
          <a class="item">
            Home
          </a>
        </Link>
        <Link to={'/beanies'}>
          <a class="item">
            Beanie Babies
          </a>
        </Link>
        <div class="right menu">
        <Link to={'/cart'}>
            <div class="item">
              <div class="ui primary button">Cart</div>
            </div>
          </Link>
          <Link to={'/login'}>
            <div class="item">
              <div class="ui primary button">Log in</div>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default NavBar;