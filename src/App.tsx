import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import "./global.scss";
import AppRouter from "./AppRouter";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Added type annotation

  return (
    <div className="main">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppRouter />
    </div>
  );
}

export default App;
