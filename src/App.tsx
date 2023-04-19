import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import Header from './component/header/header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';
import Home from './component/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './component/items/productDetail';
import Footer from './component/footer/footer';
import FashionCategory from './component/category/fashion';
import AccesoryCategory from './component/category/accesory';
import DegitalCategory from './component/category/digital';
import Cart from './component/cart/cart';
import { Provider } from 'react-redux';
import store from './store';
import NotFound from './component/Notfound/notfound';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const darkModeBtn =()=>{
    if (
      localStorage.getItem("bgMode") =='dark')
      {
      localStorage.setItem("bgMode", "light");
      document.body.className ='dark'
    } else {
      window.localStorage.setItem("bgMode", "dark");
      document.body.className ='light'
    }
  }
  document.body.className = localStorage.getItem('bgMode')??'{}';
  return (
      <ThemeProvider theme={localStorage.getItem('bgMode')=="light" ? darkTheme : lightTheme}>
        <GlobalStyles />
      <Provider store={store}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} darkModeBtn={darkModeBtn}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={'/products/:id'} element={<ProductDetail/>}/>
            <Route path={'/fashion'} element={<FashionCategory/>}/>
            <Route path={'/accesory'} element={<AccesoryCategory/>}/>
            <Route path={'/digital'} element={<DegitalCategory/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/*'} element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Provider>
      </ThemeProvider>
  )
}

export default App
