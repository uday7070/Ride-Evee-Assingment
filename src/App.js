import "./App.css";
import About from "./components/About";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Oneway from "./components/Oneway";
import Rental from "./components/Rental";
import Yatri from "./components/Yatri";
import Fare from "./components/Fare";

import "bootstrap/dist/css/bootstrap.min.css";
import HistoryYatri from "./components/HistoryYatri";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Rental />
      <Yatri />
      <Oneway />
      <Discover />
      <Fare />
      <HistoryYatri />
      <Footer />
    </div>
  );
}

export default App;
