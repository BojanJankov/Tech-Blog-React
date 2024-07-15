import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="logo-div">
        <Link to="/">
          <img src="../../../src/assets/logo.png" alt="logo" width="200px" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
