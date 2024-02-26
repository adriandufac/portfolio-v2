import { useState } from "react";
import "./App.css";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import CardDisplayer from "./components/CardDisplayer/CardDisplayer";

function App() {
  const [cardDisplayed, setCardDisplayed] = useState("About");
  return (
    <>
      <MainNavBar handleClick={() => setCardDisplayed("About")}></MainNavBar>
      <div className="grid-container">
        <aside className="side-navbar-container">
          <SideNavBar
            handleClick={(element) => setCardDisplayed(element)}
            enlightenElement={cardDisplayed}
          />
        </aside>
        <div className="card-container">
          <CardDisplayer displayedElement={cardDisplayed}></CardDisplayer>
        </div>
      </div>
    </>
  );
}

export default App;
