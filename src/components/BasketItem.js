import React, {useContext} from "react";
import UserContext from "../context/UserContext";

const BasketItem= ({item}) => {

    const {removeFromBasket} = useContext(UserContext)

    const handleRemoveFromBasket = function(){
        removeFromBasket(item)
        console.log(`${item.name} removed from basket`)
    }

    const getPrice = item.price * item.quantity

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{getPrice}</td>
                <td><button onClick={handleRemoveFromBasket}>Remove</button></td>
                <td>{item.quantity}</td>
            </tr>
        </>
    )
}

export default BasketItem