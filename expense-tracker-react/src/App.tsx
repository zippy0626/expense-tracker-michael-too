import { useState } from 'react';
import './App.css';
import Hero from './components/Hero.tsx';
import SideNavbar from './components/SideNavbar.tsx';

function App() {
  // default state of heroActive = true
  // when heroActive state changes, React rerenders
  const [heroActive, showHero] = useState(true);

  return <>{heroActive ? <Hero hide={() => showHero(false)} /> : <SideNavbar />}</>;
}

export default App;
