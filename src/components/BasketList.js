import React from "react";
import BasketItem from "./BasketItem";

const BasketList = ({user}) => {

    const basketItems = user.basketItems.map((item, index) => {
        return <BasketItem item={item} key={index}/>
    });


    return(
        <div>
            <h2>{user.name}'s basket</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove From Basket</th>
                </tr>
                {basketItems}
            </table>
        </div>
    )
}

export default BasketList