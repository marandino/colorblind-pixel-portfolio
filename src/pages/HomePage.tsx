import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Shop from "../components/Shop";

function App() {
  return (
    <div className="app">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Shop />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
