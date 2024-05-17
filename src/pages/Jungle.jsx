import soundParrot1 from "../assets/sounds/parrotWTF.mp3"
import parrot1 from "../assets/parrot1.png"
import parrotFly from "../assets/parrotFly.png"
import parrot11 from "../assets/1.png"
import parrot2 from "../assets/2.png"
import parrot3 from "../assets/3.png"
import "../global.css"

function Jungle() {
   
    const handleClick = () => {
    window.location.href = 'http://localhost:5173/about';
    };

    // const [soundParrot, setSoundParrot] = useState(false);
    const parrotSoundAudio = new Audio(soundParrot1);
    const playSoundParrot = () => {
        parrotSoundAudio.play().catch(error => console.log(error));
        setSoundPlayed(true);
    };

    return (
        <div className="jungle-global">

            <img className="parrot-one parrot-global" src={parrot1} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot11} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot2} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global" src={parrot3} alt="parrot" onClick={playSoundParrot}></img>
            <img onClick={handleClick} className="parrot-two parrot-global" src={parrotFly} alt="parrot flying"></img>
            <p>test css , ici page Jungle</p>
            <audio controls>
                <source src={soundParrot1} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
}

    export default Jungle