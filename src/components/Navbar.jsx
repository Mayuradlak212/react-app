import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <ul>
          <li> <Link to="/" >   Home  </Link>  </li>
          <li> <Link to="/service" >   Service   </Link>  </li>
          <li> <Link to="/about" >   About   </Link>  </li>
          <li> <Link to="/contact" >   Contact   </Link>  </li>
          <li> <Link to="/profile" >   Profile   </Link>  </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
