import { useState } from 'react';

import { Outlet } from "react-router-dom";
import mp3 from "../src/assets/sounds/jungle-noise.mp3"
import "../src/global.css"

function App() {
  const audio = new Audio(mp3);
  const playit = () => {
    audio.play();
    setOpacity(0);
  }
  const [opacity, setOpacity] = useState(100);
  return (
    <>
      <button className="intro" onClick={playit} style={{opacity: opacity}}>PLAY ME</button>
      <div className="backdrop">
      <Outlet />
      </div>
     
    </>
  );
}

export default App
