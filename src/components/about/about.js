import './about.scss';
import BeansBlack from '../../images/Beans-logo-white .svg';

const About = () => {
    return (
        <section>
            <div className="about">
                <div className="heading">
                    <h2 className="heading__title">About Us</h2>
                </div>
                <div className="about__image-container">
                    <img src={BeansBlack} alt="Beans" className="about__img" />
                </div>
                <p className="about__content">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
                <p className="about__content">
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
        </section>
    )
}

export default About;