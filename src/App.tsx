import Topbar from "./components/Topbar";
import "./global.scss";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="main">
      <title>Colorblind Pixel</title>
      <link rel="shortcut icon" href="assets/zhoulogot.png" />
      <Topbar />
      <AppRouter />
    </div>
  );
}

export default App;
