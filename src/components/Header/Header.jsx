import React from 'react';

import './../../App.css';
import s from  './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://cdn.shopifycloud.com/hatchful-web/assets/c3a241ae6d1e03513dfed6f5061f4a4b.png" alt="" />
    </header>
  );
}

export default Header;
