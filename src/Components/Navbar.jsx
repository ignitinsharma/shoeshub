import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import styles from "../Styles/Navbar.css";
import { LocalMall } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <header className="header" style={{ backgroundColor: "white" }}>
        <a href="/" className="logo">
          &lt;ShoesHUB&gt;
        </a>
        <input className="menubtn" type="checkbox" id="menubtn" />
        <label className="menuicon" htmlFor="menubtn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shoes">
                Shoes
            </Link>
          </li>
          <li>
            <Link to="signup">
              <PersonIcon />
            </Link>
          </li>
          <li>
            <Link to="cart">
              <LocalMall />
            </Link>
          </li>
          {/* <li>
            <Link to="cart">
              <SearchIcon />
            </Link>
          </li> */}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
