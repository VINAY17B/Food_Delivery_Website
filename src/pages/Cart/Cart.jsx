import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'


 const Cart = () => {

  const{cartItems,food_list,removeFromCart}=useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className="cart-Items">
        <div className="cart-items-title">
          <P>Items</P>
          <P>Title</P>
          <P>Price</P>
          <P>Quantity</P>
          <P>Total</P>
          <P>Remove</P>
        </div>
        <br/>
        <hr/>
      </div>

    </div>
  )
}

export default Cart