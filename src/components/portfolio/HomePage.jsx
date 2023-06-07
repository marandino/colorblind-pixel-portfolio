import Intro from "../intro/Intro";
import Portfolio from "./Portfolio";
import Testimonials from "../testimonials/Testimonials";
//import Works from "../works/Works";
// import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import "./homePage.scss";

function App() {
  return (
    <div className="app">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <div className="sections">
        <Intro className="intro" />
        <Portfolio className="portfolio" />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
