import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function DegitalCategory({ isDarkMode}:any){
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  return(
    <section>
      <div className="ProductDeatilcontainer">
        <ul className="ProductDetailcategory">
          <li>홈</li>
          <li className="beforeContent">디지털</li>
        </ul>
      </div>
      <div className="itemComponent">
      <h2 className="productCategory">디지털</h2>
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

export default DegitalCategory