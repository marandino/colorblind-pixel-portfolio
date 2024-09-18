import useSmoothScroll from "../hooks/useSmoothScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faHouse } from "@fortawesome/free-solid-svg-icons";

interface TopbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Topbar({ menuOpen, setMenuOpen }: TopbarProps) {
  const scrollToElement = useSmoothScroll();

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
            onClick={() => scrollToElement("home")}
          >
            <span className="navbar-item">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </span>
          </div>

          <div
            className="itemContainer"
            onClick={() => scrollToElement("shop")}
          >
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
    </div>
  );
}
