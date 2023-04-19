import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductDetail from '../component/items/productDetail';
import Home from '../component/home/home';
import Category from '../component/category/fashion';
import Cart from '../component/cart/cart';

function AppRouter() {
  return (
    <>
    <main>
      <Router>
          <Route path="/" Component={Home} />
          <Route path="/products/:id" Component={ProductDetail} />
          <Route path="/fashion" Component={Category}/>
          <Route path="/accesory" Component={Category}/>
          <Route path="/digital" Component={Category}/>
          <Route path="/cart" Component={Cart}/>
      </Router>
      </main>
    </>
  );
}

export default AppRouter;