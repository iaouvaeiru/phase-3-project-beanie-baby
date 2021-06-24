import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import BeanieBack from './BeanieBack'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

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
        >
            
        {flipped ? <p class="large text">{props.beanie.poem.split('/').map(line => <span>{line},<br/></span>)}</p> : 
          <div id="flipped">
          <div className="image">
            <img class="mdc-image-list__image"
            src={props.beanie.image_url}
             alt="oh no!" 
             width="290px" 
             height="auto"/>
          </div>
          <div className="content">
            <div className="header"
            >{props.beanie.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="price" />
              {props.beanie.price}
            </span>
            <div>
                {props.beanie.animal}
               swing tag:{props.beanie.swing_tag}
            </div>
          </div>
        </div>
      }
      </Card>

    
    )
  
}

export default Beanie