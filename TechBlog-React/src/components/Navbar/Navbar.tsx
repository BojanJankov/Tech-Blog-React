import { NavLink } from "react-router-dom";
import { NavLinkData } from "../../models/core.model";
import "./Navbar.css";
import { useContext } from "react";
import { PostsContext } from "../../Context/PostsContext";

function Navbar() {
  const { changeTheme, theme } = useContext(PostsContext);
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
        <li>
          {theme === "dark" ? (
            <i
              className="fa-regular fa-lightbulb"
              onClick={changeTheme}
              style={{ color: "white" }}
            ></i>
          ) : (
            <i className="fa-solid fa-lightbulb" onClick={changeTheme}></i>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
