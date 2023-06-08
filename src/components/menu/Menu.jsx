import "./menu.scss";
import { Link } from "react-router-dom";
//NEEDS TO OPTIMIZE CREATING COMPONENTS FOR THE LI
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="shop"> Shop </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#contact">Contact me!</a>
        </li>
        {/*
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
