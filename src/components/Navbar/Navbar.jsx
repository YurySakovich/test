import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../App.css';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.menu}>
      <div>
        <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={s.active}>dialogs</NavLink>
      </div>
      <div>
        <NavLink to="" activeClassName={s.active}>news</NavLink>
      </div>
      <div>
        <NavLink to="" activeClassName={s.active}>adsfd</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
