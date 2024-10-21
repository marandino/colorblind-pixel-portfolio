import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Partnerships from "../components/Partnerships";
import ShopGrid from "../components/Shop";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="app">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <div className="sections">
        <Intro />
        <Portfolio />
        <ShopGrid />
        <Partnerships />
      </div>
      <Footer />
    </div>
  );
}

export default App;
