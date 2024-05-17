
import { useState, useEffect } from 'react';
import '../styles/Paralax.css';
import '../global.css';
import jungleSound from '../assets/sounds/nature-sound.mp3'



// eslint-disable-next-line react/prop-types
const ImageComponent = ({ src, speed, scroll, direction }) => {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        setTransform(scroll * speed);
    }, [scroll, speed]);

    return (
        <img src={src} alt="" style={{ transform: `translateX(${direction * transform * 20}px) scale(${1 + transform / 10})` }} />
    );
};

// eslint-disable-next-line react/prop-types
const ImageComponent2 = ({ src, speed, scroll, direction }) => {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        setTransform(scroll * speed);
    }, [scroll, speed]);

    return (
        <img src={src} alt="" style={{ transform: `translateX(${direction * transform * 10}px) scale(${1 + transform / 8})` }} />
    );
};

// eslint-disable-next-line react/prop-types
const ZoomingText = ({ text, speed, scroll }) => {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        setTransform(scroll * speed);
    }, [scroll, speed]);

    return (
        <h1 className="zooming-text" style={{ fontSize: `${1 + transform / 4}em` }}>{text}</h1>
    );
};

const Welcome = () => {
    const [scroll, setScroll] = useState(0);
    const [soundPlayed, setSoundPlayed] = useState(false);
    const jungleSoundAudio = new Audio(jungleSound);
    const [opacity, setOpacity] = useState(100);
    const playSound = () => {
        jungleSoundAudio.play().catch(error => console.log(error));
        setSoundPlayed(true);
        setOpacity(0);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);

            if (window.scrollY > 0 && !soundPlayed) {
                playSound();
            }

            if (window.scrollY > 1200) {
                window.location.href = '/jungle';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll, soundPlayed]);



    useEffect(() => {
        const handleBeforeUnload = () => {
            const scrollPosition = window.scrollY;
            localStorage.setItem('scrollPosition', scrollPosition);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, scrollPosition);
        }
    }, []);




    return (
        <>
            <button className="play" style={{opacity: opacity}} onClick={playSound}>Click & scroll</button>

            <ImageComponent2 src="src/assets/g2.png" speed={0.1 / 4} scroll={scroll} direction={-1} />
            <ImageComponent2 src="src/assets/d2.png" speed={0.1 / 4} scroll={scroll} direction={1} />
            <ZoomingText text="Welcome to the Jungle " speed={0.25 / 8} scroll={scroll} direction={-1}/>
            <ImageComponent src="src/assets/g.png" speed={0.2 / 4} scroll={scroll} direction={-1} />
            <ImageComponent src="src/assets/d.png" speed={0.2 / 4} scroll={scroll} direction={1} />

        </>
    );
};

export default Welcome;