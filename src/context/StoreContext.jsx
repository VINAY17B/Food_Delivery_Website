import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

     const [cartItems,setCartItems]=useState({});

     const addToCart=(itemId)=>{
        if(!cartItems[itemId]){ // item not avaialble
            setCartItems((prev)=>({...prev,[itemId]:1})) // return object , user enters item to cart for first time
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) // if item is already in cart ad user clicks another time
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

      useEffect(()=>{
        console.log(cartItems);
      },[cartItems])


    const contextvalue={
         food_list ,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart 
    }

    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;