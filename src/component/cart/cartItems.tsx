import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import CartItems from './cartList';
interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function CartList() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  const cartItems = useSelector((state: any) => state.cartStore.items);

  const dispatch = useDispatch();

  let items: any = [];
  let totalPrice = 0;

  Object.keys(cartItems).map((id:any) => {
    const itemProduct = products.find((product) => product.id === Number(id));
  if (itemProduct) {
    items.push(itemProduct);
    totalPrice += itemProduct.price * cartItems[id].count;
  }
  });
  const buyAll = () => {
    dispatch(cartActions.buy());
    localStorage.clear();
  };

  return (
    <>
      <div className="cartListContainer">
        <div>
          {items.map((item: any) => (
            <CartItems
              image={item.image}
              id={item.id}
              key={item.id}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
        <div className="totalPriceContainer">
          <span className="totalPrice">
            총 : ${totalPrice.toFixed(2)}
          </span>
          <label
            htmlFor="confirm-modal"
            className="buyBtn"
          >
            구매하기
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="confirm-modal" className="modaltoggleBtn" />
        <div className="modal">
          <div className="modalContainer">
            <h3 className="madalTitle">정말로 구매하시겠습니까?</h3>
            <p className="buy">장바구니의 모든 상품들이 삭제됩니다.</p>
            <div className="modalQ">
              <label
                htmlFor="confirm-modal"
                className="modalBtn Yes"
                onClick={buyAll}
              >
                네
              </label>
              <label htmlFor="confirm-modal" className="modalBtn No">
                아니오
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartList;