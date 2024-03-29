import React, {useState } from 'react'
import Logo from './Logo';

function Navbar() {
    
    // const button = (document.querySelector('.header__button') as HTMLButtonElement);
    // const nav = (document.querySelector('.header__nav') as HTMLElement);

    // button.addEventListener('click', (): void => {
    //     nav.classList.toggle('header__nav--activo')
    // })

    const [menu, setMenu] = useState(false);


    const toogleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className="header">
            <Logo/>

            <button className="header__button" onClick= {toogleMenu}>
                <svg className="header__svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <nav className={`header__nav${menu ? '--isActive' : ''}`}>
                <ul className="header__ul">
                    <li className="header__li"><a href="/" className="header__a">About</a></li>
                    <li className="header__li"><a href="/" className="header__a">Skills</a></li>
                    <li className="header__li"><a href="/" className="header__a">Projects</a></li>
                    <li className="header__li"><a href="/" className="header__a">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar