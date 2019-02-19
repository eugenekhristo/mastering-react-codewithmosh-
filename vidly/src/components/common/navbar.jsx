import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ logoLabel, linkLabels, links }) => {

  return (
    <nav className="navbar navbar-expand navbar-light bg-light" style={{marginBottom: 40}}>
      <button className="navbar-brand">{logoLabel}</button>
      <div>
        <div className="navbar-nav">
          {linkLabels.map((item, i) => (
            <NavLink className="nav-item nav-link" to={links[i]} key={item}>
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
