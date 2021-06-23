import { useState, useEffect } from 'react';
import Beanie from './Beanie';
import {Card} from 'semantic-ui-react'


function BeaniesList (props) {

    const[beanies, setBeanies]=useState([])

  useEffect(() => {
    fetch("http://localhost:9393/beanies")
  .then((r) => r.json())
  .then((beaniesArray) => setBeanies(beaniesArray));

  }, []);
  
  let renderBeanies = 
  beanies.map(beanie => (
    <Beanie
      key={beanie.id}
      beanie={beanie}
    />
  ))
  
  console.log(beanies)
    return (
        
        <div>
       <h1>beanies, baby!</h1>
      <Card.Group itemsPerRow={3}>
        {renderBeanies}
        </Card.Group>
    </div>)
  
    
}

export default BeaniesList