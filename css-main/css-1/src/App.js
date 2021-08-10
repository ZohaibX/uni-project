import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import GridTest from "./components/grid-test";
import About from "./components/about";
import Features from "./components/features";
import Tours from "./components/tours";
import Stories from "./components/stories";
import Booking from "./components/booking";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import PopUp from "./components/popup";
import { POPUP } from "./context/popupContext";
import "./components/css/main.css";

function App() {
  const { popup, changePopup } = useContext(POPUP);
  return (
    <body>
      <div>
        {/* placing navigation at very first */}
        <Navigation />
        <header>
          <Header />
        </header>
        {/* <GridTest /> */}
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Booking />
        </main>

        <footer>
          <Footer />
        </footer>

        <div className="popup-animate">{popup && <PopUp />}</div>
      </div>
    </body>
  );
}

export default App;
