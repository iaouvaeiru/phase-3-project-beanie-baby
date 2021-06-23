import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import BeaniesList from './BeaniesListList';
// import PaintingForm from './PaintingForm'

function App() {

  const[beanies, setBeanies]=useState([])

  // useEffect(() => {
  //   fetch("http://localhost:4000/beanies")
  // .then((r) => r.json())
  // .then((beaniesArray) => setBeanies(beaniesArray));

  // }, []);
  return (
    <div>
    <NavBar
    // color={this.state.color}
    title="beanies, baby!"
    icon="beanie baby"
    description="an app we made"
    // changeColor={this.changeColor}
  />
  <BeaniesList beanies={beanies} />
  </div>
  );
}

export default App;
