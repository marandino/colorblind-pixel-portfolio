import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer"
// import Testimonials from './components/testimonials/Testimonials'
// import Works from "./components/works/Works";
//import Contact from './components/contact/Contact'
//import Todo from "./Test";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <Topbar className="topbar" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro className="intro" />
        <Portfolio className="portfolio" />
        {/* 
        <Todo/>
        {/* <Works />
        <Testimonials/>
      <Contact/>*/}
      <Footer/>
      </div>
    </div>
  );
}

export default App;
