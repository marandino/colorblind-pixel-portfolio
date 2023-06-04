import Topbar from "./components/topbar/Topbar";

import Menu from "./components/menu/Menu";
import "./app.scss";
import AppRouter from "./AppRouter";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <Topbar
        className="topbar"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppRouter />
    </div>
  );
}

export default App;
