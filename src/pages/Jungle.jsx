import soundParrot1 from "../../assets/sounds/parrotWTF.mp3"
import parrot1 from "../../assets/parrot1.png"
import parrotFly from "../../assets/parrotFly.jpg"
import "../../global.css"

function Jungle() {

    return (
        <>
            <img className="parrot-one" src={parrot1} alt="parrot"></img>
            <img className="parrot-one" src={parrotFly} alt="parrot flying"></img>
            <p>test css , ici page Jungle</p>
            <audio controls>
                <source src={soundParrot1} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <h1>salut jungle</h1>
        </>
    );
}

export default Jungle