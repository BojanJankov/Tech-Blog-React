import { NavLink } from "react-router-dom";
import { NavLinkData } from "../../models/core.model";
import "./Navbar.css";

function Navbar() {
  const navLinkDataArr: NavLinkData[] = [
    {
      path: "/",
      text: "Posts",
    },
    {
      path: "/add-post",
      text: "Add post",
    },
    {
      path: "/about",
      text: "About Us",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/login",
      text: "Login",
    },
  ];
  return (
    <nav className="Navbar">
      <ul>
        {navLinkDataArr.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
