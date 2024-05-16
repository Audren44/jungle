
import { useState, useEffect } from 'react';
import '../../styles/Paralax.css';
import '../../global.css';


// eslint-disable-next-line react/prop-types
const ImageComponent = ({ src, speed, scroll, direction }) => {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        setTransform(scroll * speed);
    }, [scroll, speed]);

    return (
        <img src={src} alt="" style={{ transform: `translateX(${direction * transform * 20}px) scale(${1 + transform / 50})` }} />
    );
};

// eslint-disable-next-line react/prop-types
const ImageComponent2 = ({ src, speed, scroll, direction }) => {
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        setTransform(scroll * speed);
    }, [scroll, speed]);

    return (
        <img src={src} alt="" style={{ transform: `translateX(${direction * transform * 10}px) scale(${1 + transform / 30})` }} />
    );
};

const Welcome = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);


            if (window.scrollY > 900) {
                window.location.href = '/jungle';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <ImageComponent2 src="src/assets/g2.png" speed={0.1} scroll={scroll} direction={-1} />
            <ImageComponent2 src="src/assets/d2.png" speed={0.1} scroll={scroll} direction={1} />
            <ImageComponent src="src/assets/g.png" speed={0.2} scroll={scroll} direction={-1} />
            <ImageComponent src="src/assets/d.png" speed={0.2} scroll={scroll} direction={1} />

        </>
    );
};

export default Welcome;

