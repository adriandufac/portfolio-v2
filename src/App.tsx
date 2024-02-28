import { useState } from "react";
import "./App.css";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import CardDisplayer from "./components/CardDisplayer/CardDisplayer";

import "./fonts/static/Oswald-Regular.ttf";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {
  const [cardDisplayed, setCardDisplayed] = useState("About");

  return (
    <>
      <MainNavBar handleClick={() => setCardDisplayed("About")}></MainNavBar>
      <div className="main-container">
        <aside className="side-navbar-container">
          <SideNavBar
            handleClick={(element) => setCardDisplayed(element)}
            enlightenElement={cardDisplayed}
          />
        </aside>
        <aside className="side-navbar-hamburger">
          <BurgerMenu
            handleClick={(element) => setCardDisplayed(element)}
          ></BurgerMenu>
        </aside>
        <div className="card-container">
          <CardDisplayer displayedElement={cardDisplayed}></CardDisplayer>
        </div>
      </div>
    </>
  );
}

export default App;
