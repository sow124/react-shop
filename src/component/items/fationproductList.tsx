import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productList.css"

function FashionProduct({ isDarkMode}:any){
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data.slice(0,4)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='productSection'>
      <h2 className='productTitle'>패션</h2>
      <div className='productContainer'>
      {products.map(product => (
        <div className='itemContainer' key={product.id}>
          <Link to={`/products/${product.id}`}>
          <figure className='productFigure'>
            <img className='itemImg' src={product.image} alt={product.title} />
          </figure>
          <div className={['itemDetail', isDarkMode ? 'dark' : 'dark'].join(' ')}>
            <p className='itemTitle'>{product.title}</p>
            <span className='itemPrice'>{product.price}</span>
          </div>
          </Link>
        </div>
      ))}
      </div>
    </section>
  )




}

export default FashionProduct
