import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'


function Beanie(props) {

    const[flipped, setIsFlipped]=useState(false)


    const handleClick = () => {
      setIsFlipped(!flipped)
    }

    
    console.log(props.beanie.poem)
    console.log(props.beanie.poem.split('/'))
    console.log (flipped)
    // 
    // console.log(poem)
    console.log(props.beanie.poem.class)
  

    
    

    return(
        <Card
        onClick={handleClick}
        class="red card"
        
        >
            
        {flipped ? <p class="poem text"><h1>{props.beanie.name}</h1> <br/>{props.beanie.poem.split('/').map(line => <span>{line}<br/></span>)}</p> : 
          <div id="flipped">
            <div className="content">
            <div className="header">
              <h1 class="ui block header">{props.beanie.name}</h1>
              </div>
          </div>
          <div className="image">
            <img class="mdc-image-list__image"
            src={props.beanie.image_url}
             alt="oh no!" 
             width="290px" 
             height="auto"/>
          </div>
          
          <div className="extra content">
            <span>
              <i className="price" />
              <h3 class="large text">${props.beanie.price}</h3>
            </span>
            <div>
                <h3 class = "large text">{props.beanie.animal}</h3>
               <h3 class = "large text">swing tag: {props.beanie.swing_tag}</h3>
            </div>
            <Button positive>Add to Cart</Button>
          </div>
        </div>
      }
      </Card>

    
    )
  
}

export default Beanie