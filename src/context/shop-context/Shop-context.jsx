import React, { createContext, useState } from 'react'
import PRODUCT from '../../pages/shop/PRODUCT'

export const ShopContext = createContext(null)

const getDefoltCart = () => {
    let cart = {}
    for(let i = 1; i <= PRODUCT.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

 export const ShopContextProvaider = (props) => {
    const [cardItems, setCordItems] = useState(getDefoltCart())

    const addToCart = (itemID) => {
        setCordItems((prev)=> ({...prev, [itemID]: prev[itemID] + 1}))
    }
    const removeToCart = (itemID) => {
        setCordItems((prev)=> ({...prev, [itemID]: prev[itemID] - 1}))
    }
    const contextValue = {cardItems, addToCart, removeToCart}

        

  return (
     <ShopContext.Provider value={contextValue}>
        {props.children} 
        </ShopContext.Provider>
  )
  
}

export default ShopContextProvaider