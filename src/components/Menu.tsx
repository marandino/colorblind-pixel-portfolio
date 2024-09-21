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
