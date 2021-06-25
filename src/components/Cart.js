import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import CartObj from './CartObj'


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
        
  const oneCart = props.carts.filter(cartObj => {
    return (cartObj.user_id === props.currentUser.id)
  })

   const renderCart = () => {
      return oneCart.map(cartObj => (
        <CartObj
          key={cartObj.id}
          cartObj={cartObj}
          currentUser={props.currentUser}
          deleteFromCart={props.deleteFromCart}
          updateCartsState={props.updateCartsState}
        />
        ))}
        console.log(oneCart)
   console.log(props.carts[0])
    return (

        <div>
            
            {props.currentUser.id !== 0 ? renderCart(): <h1>Please Log in</h1>}
           
  
        </div>
       
            

    )
}
