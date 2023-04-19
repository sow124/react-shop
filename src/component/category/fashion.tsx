import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function FashionCategory({ isDarkMode}:Home){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const menClothing = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const womenClothing = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      setProducts([...menClothing.data, ...womenClothing.data]);
    };
    fetchData();
  }, []);
  
  return(
    <section>
      <div className="ProductDeatilcontainer">
        <ul className="ProductDetailcategory">
          <li>홈</li>
          <li className="beforeContent">패션</li>
        </ul>
      </div>
      <div className="itemComponent">
      <h2 className="productCategory">패션</h2>
      <div className='productitemContainer'>
        {products.map(product=>(
          <Link to={`/products/${product.id}`} className="productsLink">
            <figure className='productFigure'>
              <img className='itemImg' src={product.image} alt={product.title} />
            </figure>
            <div className={['itemDetail', isDarkMode ? 'dark' : 'dark'].join(' ')}>
              <p className='itemTitle'>{product.title}</p>
            <span className='itemPrice'>{product.price}</span>
            </div>

          </Link>
        ))}
        </div>
      </div>
    </section>
  )
}

export default FashionCategory