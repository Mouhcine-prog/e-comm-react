import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <header>
        <div className='logo'>
          <img src={logo} alt="Logo" />
          <p>M & A</p>
        </div>
        <div className='links'>
          <ul>
            <li
              className={menu === "home" ? "active" : ""}
              onClick={() => setMenu("home")}
            >
              <Link to='/'>Home</Link>
            </li>
            <li
              className={menu === "about" ? "active" : ""}
              onClick={() => setMenu("about")}
            >
              <Link to='/about'>About</Link>
            </li>
            <li
              className={menu === "blog" ? "active" : ""}
              onClick={() => setMenu("blog")}
            >
              <Link to='/blog'>Blog</Link>
            </li>
            <li
              className={menu === "shop" ? "active" : ""}
              onClick={() => setMenu("shop")}
            >
              <Link to='/shop'>Shop</Link>
            </li>
            <li
              className={menu === "cloth" ? "active" : ""}
              onClick={() => setMenu("cloth")}
            >
              <Link to='/cloth'>Cloth</Link>
            </li>
            <li
              className={menu === "pages" ? "active" : ""}
              onClick={() => setMenu("pages")}
            >
              <Link to='/pages'>Pages</Link>
            </li>
            <li
              className={menu === "contact" ? "active" : ""}
              onClick={() => setMenu("contact")}
            >
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='partie2'>
          <FontAwesomeIcon
            style={{ width: '60px', marginRight: '16px', cursor: 'pointer' }}
            icon={faMagnifyingGlass}
          />
          <img
            src={cart_icon}
            style={{ width: '25px', cursor: 'pointer' }}
            alt='Cart Icon'
          />
          <button>Login</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
