import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './components/BeaniesList';
// import PaintingForm from './PaintingForm'

function App() {

  
  return (
    <div>
    <NavBar
    // color={this.state.color}
    title="beanies, baby!"
    icon="beanie baby"
    description="an app we made"
    // changeColor={this.changeColor}
  />
  <BeaniesList />
  </div>
  );
}

export default App;
