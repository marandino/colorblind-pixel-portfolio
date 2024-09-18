import { Link } from "react-router-dom";
import useSmoothScroll from "../hooks/useSmoothScroll";

// Define the type for the props
interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

// Define the functional component with props
export default function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  const scrollToElement = useSmoothScroll();

  const handleNavigation = (elementId: string) => {
    setMenuOpen(false);
    scrollToElement(elementId);
  };

  return (
    <div className={`menu ${menuOpen ? "active" : ""}`}>
      <ul>
        <li onClick={() => handleNavigation("home")}>
          <a href="#home">Home</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="https://wa.me/50687492322">Contact me!</a>
        </li>

        <li onClick={() => handleNavigation("shop")}>
          {/* this acts as a fallback*/}
          <a href="#shop">Shop</a>
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
