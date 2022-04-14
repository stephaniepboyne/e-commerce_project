import React,{useContext} from "react";
import UserContext from "../context/UserContext";

const ShopItem = ({item}) => {

    const {onAddToBasket} = useContext(UserContext)

    const handleAddToBasket = function(){
        onAddToBasket(item)
        console.log(`${item.name} added to basket`)
    }

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={handleAddToBasket}>Add to Basket</button></td>
            </tr>
        </>
    )

}

export default ShopItem