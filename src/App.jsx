import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import jungleSound from './assets/sounds/nature-soundstropicaljunglebirds-108380.mp3';

function App() {
    const [soundPlayed, setSoundPlayed] = useState(false);
    const jungleSoundAudio = new Audio(jungleSound);

    const playSound = () => {
        setTimeout(() => {
            jungleSoundAudio.currentTime = 5;
            jungleSoundAudio.play().catch(error => console.log(error));
            setSoundPlayed(true);
        }, 0);
    };

    useEffect(() => {
        if (!soundPlayed) {
            playSound();
        }
    }, [soundPlayed]);

    return (
        <>
            {!soundPlayed && <button className="play" onClick={playSound}>Start</button>}
            <Outlet />
        </>
    );
}

export default App;