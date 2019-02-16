import React from 'react';

const Navbar = ({total}) => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">
      Total: <span className="badge badge-warning">{total}</span>
    </span>
  </nav>
);

export default Navbar;
