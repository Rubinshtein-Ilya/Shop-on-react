import './nav.scss';
import whiteLogo from '../../images/Group.svg';


const Nav = () => {

    return (
        <nav>
            <div className='nav nav__header'>
                <div className="nav__logo-wraper">
                    <a href="/"><img className='nav__logo' src={whiteLogo} alt="Coffee shop logo" /></a>
                </div>
                <div className="nav__menu-wraper">
                    <ul className='nav__items-container'>
                        <li className='nav__item'>
                            <a className='nav__link' href="/">Coffee house</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link' href="/">Our coffee</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link' href="/">For your pleasure</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;