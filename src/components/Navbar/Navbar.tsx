import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar() {
  return (
    <nav className='nav'>
        <div className="nav__container">
            <h1 className="nav__logo">
                CR
            </h1>
            <label htmlFor="" className="nav__label">
                <i className='nav__img'>
                    <GiHamburgerMenu/>
                </i>
            </label>
            <div className="nav__menu">
                <a href="/" className="nav__item">About</a>
                <a href="/" className="nav__item">Skills</a>
                <a href="/" className="nav__item">Projects</a>
                <a href="/" className="nav__item">Contacto</a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar