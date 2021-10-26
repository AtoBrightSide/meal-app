import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => props.theme.backgroundColor};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%50%;
  border: none;
  background-color: ${props => props.theme.titleColor};
  color: ${props => props.theme.backgroundColor};
  &::focus {
      outline: none;
  }
  transition: all .5s ease;  
`;

function Navbar(props) {

    function changeTheme() {
        if (props.theme === "light")
            props.setTheme("dark");
        else
            props.setTheme("light");
    }

    const icon = props.theme === "dark" ? <span class="material-icons">wb_sunny </span> : <span class="material-icons">nightlight</span>

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Meal-App <i class="fas fa-hamburger"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                All Meals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/categories' className='nav-links' onClick={closeMobileMenu}>
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/countries' className='nav-links' onClick={closeMobileMenu}>
                                Countries
                            </Link>
                        </li>

                    </ul>
                    {button && <Toggle onClick={changeTheme}>
                        {icon}
                    </Toggle>}
                </div>
            </Nav>
        </>
    )
}

export default Navbar
