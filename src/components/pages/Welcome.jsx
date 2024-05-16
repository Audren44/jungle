
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

const Welcome = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <ImageComponent src="src/assets/g.png" speed={0.1} scroll={scroll} direction={-1} />
            <ImageComponent src="src/assets/d.png" speed={0.1} scroll={scroll} direction={1} />
        </>
    );
};

export default Welcome;

