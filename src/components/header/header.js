import './header.scss';
import Beans from '../../images/Beans-logo.svg';

const Header = () => {

    return (
        <section>
            <div className="header">
                <h1 className="header__title">Everything You Love About Coffee</h1>
                <div className="header__image-container"><img src={Beans} alt="" className="header__img" /></div>
                <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
                <h2 className="header__subtitle">Want to try our beans?</h2>
                <a href="#" className="header__btn">More</a>
            </div>
        </section>
    )
}

export default Header;