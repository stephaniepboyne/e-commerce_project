import React from "react";
import ShopItem from "./ShopItem";

const ShopItemList = ({items}) => {

    const shopItems = items.map((item, index) => {
        return <ShopItem item={item} key={index}/>
    });

    return(
        <div>
            <h2 id="list-header">List</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Add to basket</th>
                </tr>
                {shopItems}
            </table>
        </div>
    )

}

export default ShopItemList