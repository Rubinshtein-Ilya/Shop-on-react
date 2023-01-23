import './footer.scss';
import blackLogo from '../../images/Groupblack-group.svg';
import BeansBlack from '../../images/Beans-logo-white .svg';

const Footer = () => {

    return (
        <footer>
            <div className='nav nav__footer'>
                <div className="nav__logo-wraper">
                    <a href="/"><img className='nav__logo' src={blackLogo} alt="Coffee shop logo" /></a>
                </div>
                <div className="nav__menu-wraper">
                    <ul className='nav__items-container'>
                        <li className='nav__item nav__item_footer'>
                            <a className='nav__link nav__link_footer' href="/">Coffee house</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link nav__link_footer' href="/">Our coffee</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link nav__link_footer' href="/">For your pleasure</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-image-container">
                <img src={BeansBlack} alt="beans" className="footer-image-container__item" />
            </div>
        </footer>
    );
}

export default Footer;