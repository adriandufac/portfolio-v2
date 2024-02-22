import { useState } from "react";
import "./App.css";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import CardDisplayer from "./components/CardDisplayer/CardDisplayer";
import AboutCard from "./components/AboutCard/AboutCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";

function App() {
  const [cardDisplayed, setCardDisplayed] = useState("About");
  return (
    <>
      <MainNavBar></MainNavBar>
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
      <AboutCard></AboutCard>
      <ExperienceCard></ExperienceCard>
    </>
  );
}

export default App;
