import React from 'react';

import './../../App.css';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.menu}>
      <div>
        <a href="">profile</a>
      </div>
      <div>
        <a href="">messages</a>
      </div>
      <div>
        <a href="">news</a>
      </div>
      <div>
        <a href="">adsfd</a>
      </div>
    </nav>
  );
}

export default Navbar;
