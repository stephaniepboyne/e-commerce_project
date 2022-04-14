import React, {useState, useEffect} from "react";
import ShopItemList from "../components/ShopItemList";
import BasketList from "../components/BasketList";
import UserContext from "../context/UserContext";

const MainContainer = () => {

    const[user, setUser] = useState({
        name: "Stephanie Boyne",
        basketItems:[
            {colour: "Pasta", price: 2, quantity: 1},
            {colour: "apples", price:1, quantity: 2}
        ]
    })

    const[items, setItems] = useState([
        {colour :"apples", price: 1},
        {colour: "oranges" , price: 3},
        {colour: "Bread", price: 2},
        {colour: "prawns", price: 5}
    ])

    const onAddToBasket = function(selectedItem){
        const temp = {...user};
        const existsingItem = temp.basketItems.find((item) => {
            return selectedItem.colour === item.colour;
        })
        if (existsingItem) {
            existsingItem.quantity+=1;
        } else {
            selectedItem.quantity = 1;
            temp.basketItems.push(selectedItem);
        } 
        setUser(temp);
    }

    const removeFromBasket = function(selectedItem){
        const temp = {...user}
        if (selectedItem.quantity === 1) {
            const index = temp.basketItems.indexOf(selectedItem)
            temp.basketItems.splice(index, 1);
            
        } else {
            temp.basketItems.forEach((item) => {
                if (item.colour === selectedItem.colour) {
                    item.quantity -= 1;
                }
            })
        }
        setUser(temp);
    }

    const calculateTotal = function(user) {
       let total = 0 
       user.basketItems.forEach((item) => {
           total += item.price;
       })
       return total
    }

    return (
        <div>
            <UserContext.Provider value = {{onAddToBasket, removeFromBasket}}>
                <BasketList user={user} />
                <ShopItemList items={items} />
            </UserContext.Provider>
            <h3>Total cost: {calculateTotal(user)}</h3>
        </div>
    )


}

export default MainContainer