import { Link } from "react-router-dom";

interface TopbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Topbar({ menuOpen, setMenuOpen }: TopbarProps) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            <img src="assets/zhoulogo.png" alt="Colorblind Pixel logo" />
            Colorblind Pixel.
          </a>
          <div className="itemContainer">
            <span>
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                <i className="fa fa-home"></i>
                Home
              </a>
            </span>
          </div>

          <div className="itemContainer">
            <span>
              <a
                href="/#shop"
                style={{ textDecoration: "none", color: "black" }}
              >
                <i className="fa fa-shopping-bag"></i>
                Shop
              </a>
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
