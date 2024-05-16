import { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    const music = new Audio('src/assets/sounds/jungle-noise.mp3');
    music.loop = true; 
    music.play();

    return () => {
      music.pause();
      music.currentTime = 0; 
    };
  }, []); 

  return (
      <>
      </>
  );
}

export default Welcome;


