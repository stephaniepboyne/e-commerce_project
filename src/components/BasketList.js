import React from "react";
import BasketItem from "./BasketItem";

const BasketList = ({user}) => {

    const basketItems = user.basketItems.map((item, index) => {
        return <BasketItem item={item} key={index}/>
    });


    return(
        <div>
            <h2>{user.name}'s Basket</h2>
            <table>
                <tr>
                    <th>Colour</th>
                    <th>Price</th>
                    <th>Remove Item From Basket</th>
                    <th>Quantity</th>
                </tr>
                {basketItems}
            </table>
        </div>
    )
}

export default BasketList