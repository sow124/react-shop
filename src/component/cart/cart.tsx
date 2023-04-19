import { useState } from "react";
import { useSelector } from "react-redux";
import CartEmpty from "./cartEmpty"
import CartItems from "./cartItems";
import CartList from "./cartItems"
function Cart(){
  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount,
  );
  
  return(
    <section>
    <div className='ProductDeatilcontainer'>
      <div className='categoryContainer'>
        <ul className='ProductDetailcategory'>
          <li>홈</li>
          <li className='beforeContent'>장바구니</li>
        </ul>
      </div>
      <div>{cartItemsCount === 0 ? <CartEmpty /> : <CartList/>}</div>
    </div>
    </section>

  )
}
export default Cart