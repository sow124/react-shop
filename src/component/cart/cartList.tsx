import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cartStore';


function CartItems(props: any) {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(
    (state: any) => state.cartStore.items[`${props.id}`]?.count || 0,
  );

  const reduceFromCart = (id:any & void) => {
    dispatch(cartActions.removeCart({ id: props.id }));
  };

  const addToCart = () => {
    dispatch(cartActions.addCart({ id: props.id }));
  };

  return (
    <div className="detailConatiner">
      <Link to={'/product/' + props.id}>
        <figure className="cartImgContainer">
          <img
            src={props.image}
            alt={props.title}
            className="cartImg"
          />
        </figure>
      </Link>
      <div className="productDetail">
        <h2 className="productDetailTitle">{props.title}</h2>
        <p className="productPrice">
          ${(props.price * cartItemCount).toFixed(2)}
        </p>
          <div className="btnContainer">
            <button className="minusBtn" onClick={reduceFromCart}>
              -
            </button>
            <button className="CountBtn">
              {cartItemCount}
            </button>
            <button className="plusBtn" onClick={addToCart}>
              +
            </button>
          </div>
      </div>
    </div>
  );
}

export default CartItems;