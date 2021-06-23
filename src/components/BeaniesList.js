import React from 'react';
// import Painting from './Painting';

function BeaniesList () {


    return (
        <div>
       <h1>beanies, baby!</h1>
      {
      props.beanies.map(beanie => (
        <Beanie
          key={beanie.id}
          beanie={beanie}
        />
      ))
      }
    </div>)
  


    
}