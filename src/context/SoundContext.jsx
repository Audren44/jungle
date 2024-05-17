import { createContext, useEffect } from "react";
const SoundContext = createContext();

// eslint-disable-next-line react/prop-types
function SoundProvider({ children }) {
          useEffect(() => {
        const sound = new Audio('src/assets/sounds/jungle-noise.mp3');
        sound.loop = true; 
        sound.play();
    
        return () => {
          sound.pause();
          sound.currentTime = 0; 
        };
      }, []); 
 


    return (
        // eslint-disable-next-line no-undef
        <SoundContext.Provider value={{ sound }} >
            <div>={children} </div>
        </SoundContext.Provider>
    );
}
export { SoundContext, SoundProvider };

  
// //...
// <ReactAudioPlayer
//   src="src/assets/sounds/jungle-noise.mp3'"
//   autoPlay
//   controls
// />
