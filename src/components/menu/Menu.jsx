import "./menu.scss";
import { Link } from "react-router-dom";
//NEEDS TO OPTIMIZE CREATING COMPONENTS FOR THE LI
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="shop"> Click me</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/*<li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
       <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
  </li>*/}
      </ul>
    </div>
  );
}
