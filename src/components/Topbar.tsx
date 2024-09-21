import useSmoothScroll from "../hooks/useSmoothScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Topbar() {
  const scrollToElement = useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNavClick = (section: string) => {
    scrollToElement(section);
    setMenuOpen(false);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            <img src="assets/zhoulogo.png" alt="Colorblind Pixel logo" />
            Colorblind Pixel.
          </a>
          <div
            className="itemContainer"
            onClick={() => handleNavClick("intro")}
          >
            <span className="navbar-item">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </span>
          </div>

          <div className="itemContainer" onClick={() => handleNavClick("shop")}>
            <span className="navbar-item">
              <FontAwesomeIcon icon={faShoppingBag} />
              Shop
            </span>
          </div>
        </div>
        <button type="submit">
          <a href="/#contact">Contact me</a>
        </button>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />k
    </div>
  );
}

type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
};

// Define the functional component with props
export function HamburgerMenu({ menuOpen, setMenuOpen }: MenuProps) {
  const scrollToElement = useSmoothScroll();

  const handleNavigation = (elementId: string) => {
    scrollToElement(elementId);
    setMenuOpen(false);
  };

  return (
    <div className={`menu ${menuOpen ? "active" : ""}`}>
      <ul>
        <li onClick={() => handleNavigation("home")}>
          <a>Home</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="https://wa.me/50687492322">Contact me!</a>
        </li>

        <li onClick={() => handleNavigation("shop")}>
          {/* this acts as a fallback*/}
          <a>Shop</a>
        </li>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dkhpxyxnt/image/upload/c_thumb,w_200,g_face/v1726200029/zhoulogo_otm7rq.png"
            alt="Menu Logo"
          />
        </div>
        <div className="container">
          <img
            src="https://res.cloudinary.com/drfhleop1/image/upload/c_thumb,w_200,g_face/v1726212149/COLORBLINDTEXT_bcjb5u.png"
            alt="Brand Name Image"
            className="moving-image"
          />
        </div>
      </ul>
    </div>
  );
}
