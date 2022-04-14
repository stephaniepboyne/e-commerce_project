import React,{useContext} from "react";
import UserContext from "../context/UserContext";

const ShopItem = ({item}) => {

    const {onAddToBasket} = useContext(UserContext)

    const handleAddToBasket = function(){
        onAddToBasket(item)
        console.log(`${item.colour} added to basket`)
    }

    return (
        <>
            <tr>
                <td>{item.colour}</td>
                <td>{item.price}</td>
                <td><button onClick={handleAddToBasket}>Add to Basket</button></td>
            </tr>
        </>
    )

}

export default ShopItem