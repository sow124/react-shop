import axios from "axios";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './productDetail.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartStore";

function ProductDetail() {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<any>(null); 
  const dispatch = useDispatch();

  const addToCart = () => {
  dispatch(cartActions.addCart({ id: Number(id) }));
};
 
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);


  const getCategory = (category: string) => {
    let result = '';
    switch (category) {
      case "men's clothing":
        result = '패션';
        break;
      case "women's clothing":
        result = '패션';
        break;
      case 'jewelery':
        result = '액세서리';
        break;
      case 'electronics':
        result = '디지털';
        break;
      default:
        break;
    }
    return result;
  };
  const category = product ? getCategory(product.category) : '';
  
  const getRateStar = (rateNumber: number) => {
    const stars = [];
    let starCount = Math.floor(rateNumber * 2);
  
    for (let i = 0; i < starCount; i++) {
      if (i % 2 === 0) {
        stars.push(
          <input
            key={i}
            type="radio"
            name="rating-10"
            className="star"
            disabled
            checked
          />,
        );
      } else {
        stars.push(
          <input
            key={i}
            type="radio"
            name="rating-10"
            className="star2"
            disabled
            checked
          />,
        );
      }
    }
  
    if (rateNumber < 5) {
      for (let i = starCount; i < 10; i++) {
        if (i % 2 === 0) {
          stars.push(
            <input
              key={i}
              type="radio"
              name="rating-10"
              className="emstar"
              disabled
            />,
          );
        } else {
          stars.push(
            <input
              key={i}
              type="radio"
              name="rating-10"
              className="emstar2"
              disabled
            />,
          );
        }
      }
    }
  
    return stars;
  };

  return (
    <section className="productDetailSection">
      {product ? (
        <div key={product.id} className='ProductDeatilcontainer'>
          <div className='categoryContainer'>
            <ul className='ProductDetailcategory'>
              <li>{category}</li>
              <li className='beforeContent'>{product.title}</li>
            </ul>
          </div>
          <div className='detailConatiner'>
            <figure className='imgContainer'>
              <img src={product.image} alt={product.title} className='productImg'/>
            </figure>
            <div className='productDetail'>
              <h2 className='productDetailTitle'>{product.title} <span className='New'>NEW</span> </h2>
              <p className="productDescription">{product.description}</p>
              <div className="productDetailItem">
                <div>{getRateStar(product.rating.rate)}</div>
                <span className="starrating">{product.rating.rate}/{product.rating.count}참여</span>
              </div>
              <span className="productPrice">${product.price}</span>
              <div className="cartContainer">
                <button className="cartBtn" onClick={()=>addToCart}>장바구니에 담기</button>
                <Link to={`/cart`}>
                  <div className="carLink">장바구로 이동</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ):(<p></p>)}
    </section>
  );
}



export default ProductDetail;

