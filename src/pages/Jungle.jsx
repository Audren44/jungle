import soundParrot1 from "../assets/sounds/parrotWTF.mp3"
import parrot1 from "../assets/parrot1.png"
import parrotFly from "../assets/parrotFly.png"
import parrot11 from "../assets/1.png"
import parrot2 from "../assets/2.png"
import parrot3 from "../assets/3.png"
import "../global.css"

function Jungle() {

    const parrotSoundAudio = new Audio(soundParrot1);
    const playSoundParrot = () => {
        parrotSoundAudio.play().catch(error => console.log(error));
        setSoundPlayed(true);
    };

    return (
        <div className="jungle-global">

            <img className="parrot-one parrot-global div1 parrot-except" src={parrot1} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global div2" src={parrot3} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global div3 parrot-except" src={parrot2} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-one parrot-global div4" src={parrot11} alt="parrot" onClick={playSoundParrot}></img>
            <img className="parrot-two parrot-global div5 translate" src={parrotFly} alt="parrot flying"></img>

        </div>
    );
}

export default Jungle