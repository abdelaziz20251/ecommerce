import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../assets/Images/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={style.parent}>
            <div className={style.logo}>
                <img src={Logo} alt='E-Commerce logo' />
                <h3>E-Commerce</h3>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className={style.hamburger} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navbar Links */}
            <div className={`${style.navbar} ${isOpen ? style.open : ''}`}>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? style.active : undefined}>
                    Home
                </NavLink>
                <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? style.active : undefined}>
                    Products
                </NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? style.active : undefined}>
                    About
                </NavLink>
                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? style.active : undefined}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}
