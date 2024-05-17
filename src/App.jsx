import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import jungleSound from './assets/sounds/nature-sound.mp3'; // Remplacez par le chemin de votre fichier audio

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