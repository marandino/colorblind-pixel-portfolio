import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ShopGrid from "../components/Shop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="app">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <ShopGrid />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
