import soundParrot1 from "../assets/sounds/parrotWTF.mp3"
import soundParrot2 from "../assets/sounds/parrotWTF2.mp3"
import soundParrot3 from "../assets/sounds/parrotWTF3.mp3"
import soundParrot4 from "../assets/sounds/parrotWTF4.mp3"

import parrot1 from "../assets/parrot1.png"
import parrotFly from "../assets/parrotFly.png"
import parrot11 from "../assets/1.png"
import parrot2 from "../assets/2.png"
import parrot3 from "../assets/3.png"
import "../global.css"
import { useEffect } from "react";

function Jungle() {

    const parrotSoundAudio = new Audio(soundParrot1);
    const playSoundParrot = () => {
        parrotSoundAudio.play().catch(error => console.log(error));
    };

    const parrotSoundAudio2 = new Audio(soundParrot2);
    const playSoundParrot2 = () => {
        parrotSoundAudio2.play().catch(error => console.log(error));
    };

    const parrotSoundAudio3 = new Audio(soundParrot3);
    const playSoundParrot3 = () => {
        parrotSoundAudio3.play().catch(error => console.log(error));
    };

    const parrotSoundAudio4 = new Audio(soundParrot4);
    const playSoundParrot4 = () => {
        parrotSoundAudio4.play().catch(error => console.log(error));
    };


    //scroll back to home page*********************************
    // eslint-disable-next-line no-unused-vars
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st <= 0) {
                // Si on est en haut de la page
                window.location.href = '/';
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //scroll back to home page********************

    return (
        <div className="jungle-global">

            <img className="parrot-one parrot-global div1 parrot-except" src={parrot1} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global div2" src={parrot3} alt="parrot" onClick={playSoundParrot2}></img>
            <img className="parrot-one parrot-global div3 parrot-except" src={parrot2} alt="parrot" onClick={playSoundParrot3}></img>
            <img className="parrot-one parrot-global div4" src={parrot11} alt="parrot" onClick={playSoundParrot4}></img>
            <img className="parrot-two parrot-global div5 translate" src={parrotFly} alt="parrot flying"></img>

        </div>
    );
}

export default Jungle