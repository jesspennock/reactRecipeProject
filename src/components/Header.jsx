import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav className="header-nav">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/newRecipe">
            <button>Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
