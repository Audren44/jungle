import soundParrot1 from "../assets/sounds/parrotWTF.mp3"
import parrot1 from "../assets/parrot1.png"
import parrotFly from "../assets/parrotFly.png"
import parrot11 from "../assets/1.png"
import parrot2 from "../assets/2.png"
import parrot3 from "../assets/3.png"
import "../global.css"
import {useEffect} from "react";

function Jungle() {

    // const [soundParrot, setSoundParrot] = useState(false);
    const parrotSoundAudio = new Audio(soundParrot1);
    const playSoundParrot = () => {
        parrotSoundAudio.play().catch(error => console.log(error));
        setSoundPlayed(true);
    };


    //scroll back to home page*********************************
    // eslint-disable-next-line no-unused-vars
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st <= 0){
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

            <img className="parrot-one parrot-global" src={parrot1} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot11} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot2} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot3} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-two parrot-global" src={parrotFly} alt="parrot flying"></img>
            <p>test css , ici page Jungle</p>
            <audio controls>
                <source src={soundParrot1} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
}

export default Jungle