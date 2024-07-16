import { useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const toogleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toogleVisible);
  return (
    <button
      className="back-to-top-button"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default BackToTopButton;
