import "./menu.scss";
import { Link } from "react-router-dom";

// Define the type for the props
interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

// Define the functional component with props
export default function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  return (
    <div className={`menu ${menuOpen ? "active" : ""}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">Home</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="/#contact">Contact me!</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="shop">Shop</Link>
        </li>
        {/* 
        <li onClick={() => setMenuOpen(false)}>
          <Link to="shop">Shop</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#testimonials">Clients</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        */}
      </ul>
    </div>
  );
}
