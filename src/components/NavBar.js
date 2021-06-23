import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';


function NavBar() {


    return (
        <div class="ui large menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Beanie Babies
        </a>
        <div class="right menu">
          <div class="item">
              <div class="ui primary button">Sign Up</div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;