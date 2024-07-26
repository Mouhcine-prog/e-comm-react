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
            {['home', 'about', 'blog', 'shop', 'cloth', 'pages', 'contact'].map((item) => (
              <li
                key={item}
                className={menu === item ? "active" : ""}
                onClick={() => setMenu(item)}
              >
                <Link style={{textDecoration:'none'}} to={`/${item === 'home' ? '' : item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='partie2'>
          <FontAwesomeIcon
            style={{ width: '60px', marginRight: '16px', cursor: 'pointer',position:'relative',right:'10px' }}
            icon={faMagnifyingGlass}
          />
          <img
            src={cart_icon}
            style={{ width: '25px', cursor: 'pointer',position:'relative',right:'10px' }}
            alt='Cart Icon'
          />
          <button>Login</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
