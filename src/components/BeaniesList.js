import { useState, useEffect } from 'react';
import Beanie from './Beanie';


function BeaniesList (props) {

    const[beanies, setBeanies]=useState([])

  useEffect(() => {
    fetch("http://localhost:9393/beanies")
  .then((r) => r.json())
  .then((beaniesArray) => setBeanies(beaniesArray));

  }, []);

  console.log(beanies)
    return (
        
        <div>
       <h1>beanies, baby!</h1>
      {
      beanies.map(beanie => (
        <Beanie
          key={beanie.id}
          beanie={beanie}
        />
      ))
      }
    </div>)
  
    
}

export default BeaniesList