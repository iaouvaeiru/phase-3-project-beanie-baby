import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

function Beanie(props) {

    const[flipped, setIsFlipped]=useState(false)
    console.log(props.beanie)
    

    return(
        <Card
        onClick={setIsFlipped}>
        <div>
          <div className="image">
            <img src={props.beanie.image_url} alt="oh no!" width="290px" height="auto"/>
          </div>
          <div className="content">
            <div className="header">{props.beanie.name}</div>
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
      </Card>
    )
  
}

export default Beanie