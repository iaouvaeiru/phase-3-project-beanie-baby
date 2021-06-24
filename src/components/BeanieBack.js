import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import Beanie from './BeanieBack'

export default function BeanieBack(props) {

    
    

    
    
    let formattedPoem = props.beanie.poem.split('/').map(line => <span>{line},<br/></span>)

    return(
        <Card>
           <p>Poem</p>
           {/* <p>{props.beanie.poem.split('/').map(line => <span>{line},<br/></span>)}</p> */}
        
      
     
      
      </Card>

    
    )
  
}


  {/* <h1>{props.beanie.poem.split('/')[0]}</h1> */}
        {/* <br/>
        <p>{props.beanie.poem.split('/')[1]}</p>
        <br/>
        <p>{props.beanie.poem.split('/')[2]}</p>
        <br/>
        <p>{props.beanie.poem.split('/')[3]}</p> */}
          
     {/*  */}