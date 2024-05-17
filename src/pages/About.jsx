import '../styles/About.css'
import { Link } from 'react-router-dom';


function About() {

    return (
        <>
            <div className="about-container">
                <Link to="/" className="home-link">Return</Link>
                <p className='about-text'>
                    Les perroquets sont des oiseaux connus
                    pour leur faculté d'immitation de la
                    voix humaine. Ils ont des gros becs et des
                    couleurs vives. En nous renvoyant
                    à nous-mêmes et à nos obsessions, ils ont
                    le pouvoir singulier d'apporter des réponses
                    à nos questionnements les plus intimes.
                </p>
            </div>
        </>
    );
}

export default About;