import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      Header
      <Link to="signin">signin</Link>
      <Link to="signup">signup</Link>
    </div>
  );
}

export default Header;
