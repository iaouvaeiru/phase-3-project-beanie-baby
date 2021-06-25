import { useState, useEffect } from 'react';
import Beanie from './Beanie';
import {Card} from 'semantic-ui-react'


function BeaniesList (props) {


  
  let renderBeanies = 
  props.beanies.map(beanie => (
    <Beanie
      key={beanie.id}
      beanie={beanie}
      user={props.user}
      addToCarts={props.addToCarts}
      checkCartExistence={props.checkCartExistence}
    />
  ))
  
  // console.log(beanies)
    return (
        
        <div>
       <h1>beanies, baby!</h1>
      <Card.Group itemsPerRow={3}>
        {renderBeanies}
        </Card.Group>
    </div>)
  
    
}

export default BeaniesList