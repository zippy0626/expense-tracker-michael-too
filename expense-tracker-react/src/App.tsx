import { Fragment, useState } from "react";
import "./App.css";
import Hero from "./components/Hero.tsx";

function App() {
  // default state of heroActive = true
  // when heroActive state changes, React rerenders
  const [heroActive, showHero] = useState(true);

  return <>{heroActive ? <Hero onStart={() => showHero(false)} /> : <Fragment />}</>;
}

export default App;
