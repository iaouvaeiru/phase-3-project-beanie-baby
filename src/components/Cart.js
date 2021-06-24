import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'


export default function Cart(props) {

    
    //   console.log(carts[0].beanie_baby.name)

    

//     const handleDelete = () => {
//         fetch("http://localhost:9393/removeBeanieFromCart", {
//       method: "POST",
//       headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     //params in the controller
//     user_id: props.currentUser.id,
//     beanie_baby_id: beanie_baby_id

//   }),
// })
//   .then((r) => r.json())
//   .then(() => props.deleteFromCart(props.beanie.id));

//     }
        
    

   const renderCart = () => {
    return props.carts.map(cartObj =>{
        return (<Card>

        <img src={cartObj.beanie_baby.image_url}></img>
        <p>Quantity: {cartObj.quantity}</p>
        <br />
        <p>Price per Beanie: ${cartObj.beanie_baby.price}</p>
        <p>Total: ${cartObj.quantity *(cartObj.beanie_baby.price)}</p>
        <Button 
        class="ui negative basic button"
        color="red"
        onClick={() => {
            fetch("http://localhost:9393/removeBeanieFromCart", {
          method: "POST",
          headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //params in the controller
        user_id: props.currentUser.id,
        beanie_baby_id: cartObj.beanie_baby_id
    
      }),
    })
      .then((r) => r.json())
      .then(() => props.deleteFromCart(cartObj.beanie_baby_id));
    
        }}>Delete</Button>
                </Card>
    )})
       }
   console.log(props.carts[0])
    return (

        <div>
            
            {renderCart()}
           
  
        </div>
       
            

    )
}
