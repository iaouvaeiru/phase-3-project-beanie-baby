import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { useState } from 'react';

export default function CartObj(props) {
    // let [quantity, setQuantity] = useState()
    console.log(props.cartObj.quantity)
    const handleDelete = () => {
            fetch("http://localhost:9393/removeBeanieFromCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
        //params in the controller
                user_id: props.currentUser.id,
                beanie_baby_id: props.cartObj.beanie_baby_id
                }),
            })
            .then((r) => r.json())
            .then(() => props.deleteFromCart(props.cartObj.beanie_baby_id));
        }

        const handlePlus = () => {
            fetch("http://localhost:9393/updateBeanieQuantity", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: props.currentUser.id,
                    quantity: props.cartObj.quantity + 1,
                    beanie_baby_id: props.cartObj.beanie_baby_id
                })
            })
            .then(res => res.json())
            .then((cartObj) => {
                console.log(cartObj)
                props.updateCartsState(cartObj)})
        }

        const handleMinus = () => {
            fetch("http://localhost:9393/updateBeanieQuantity", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: props.currentUser.id,
                    quantity: props.cartObj.quantity - 1,
                    beanie_baby_id: props.cartObj.beanie_baby_id
                })
            })
            .then(res => res.json())
            .then((cartObj) => {
                props.updateCartsState(cartObj)})
        }

    return (
        <Card>  
            <img src={props.cartObj.beanie_baby.image_url}></img>
            <p>Quantity: {props.cartObj.quantity}</p>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <br />
            <p>Price per Beanie: ${props.cartObj.beanie_baby.price}</p>
            
            <Button 
                class="ui negative basic button"
                color="red"
                onClick={handleDelete}>Delete</Button>
        </Card>
    )
}
