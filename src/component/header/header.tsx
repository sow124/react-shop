import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "./header.module.css";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Header({ isDarkMode, toggleDarkMode, darkModeBtn }: any) {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    var arr: any = [];
    for (var i in products) {
      if (products[i].title.includes(value)) {
        arr.push(products[i]);
      }
    }
    setSearch(arr);
    console.log(arr);
  };

  const onFocusHandler = () => {
    setIsSearch(true);
  };

  const cartItemsCount = useSelector((state: any) => state.cartStore.totalCount);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <button className={styles.menuBtn} onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={[styles.svg, localStorage.getItem("bgMode") == "light" ? styles.dark : styles.light].join(" ")}
            fill="none"
            viewBox="0"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
          </svg>
        </button>
        <h1 className={styles.logo}>
          <Link to={"/"}>
            <div>React shop</div>
          </Link>
        </h1>
        <div className={[styles.listcontainer, isActive ? styles.active : null].join(" ")}>
          <div onClick={handleToggle} className={styles.listbackground}></div>
          <ul className={styles.list} id="nav">
            <li>
              <Link to={"/fashion"}>
                <div className={isDarkMode ? styles.lidark : styles.liLight}>패션</div>
              </Link>
            </li>
            <li>
              <Link to={"/accesory"}>
                <div className={isDarkMode ? styles.lidark : styles.liLight}>악세서리</div>
              </Link>
            </li>
            <li>
              <Link to={`/digital`}>
                <div className={isDarkMode ? styles.lidark : styles.liLight}>디지털</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.inputbox}>
          <button
            onClick={() => {
              toggleDarkMode();
              darkModeBtn();
            }}
            className={styles.bgBtn}
            id="bgBtn"
          >
            {localStorage.getItem("bgMode") == "light" ? <MdLightMode /> : <MdOutlineNightlight />}
          </button>
          <div className={styles.inputContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              onChange={onChange}
              onFocus={onFocusHandler}
              type="search"
              className={[styles.input, localStorage.getItem("bgMode") == "light" ? styles.dark : styles.light].join(" ")}
              placeholder="검색"
            />
            {isSearch && (
              <ul className={styles.searchui}>
                {search.map((product: any) => (
                  <li key={product.id} className={styles.searchlist}>
                    <Link to={`/products/${product.id}`} className={styles.searchlistLink}>
                      <span className={styles.producttitle}>{product.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.shopbox}>
            <Link to={"/cart"}>
              <HiOutlineShoppingBag />
              <span className={styles.shopCount} id="count">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
