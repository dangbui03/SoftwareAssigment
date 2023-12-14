import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';
import { IoMdPrint } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

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
    window.addEventListener('resize', showButton);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);
  const fakeUser = {
    id: 1,
    name: 'Lam Hoang',
    email: 'lam.nguyen220103@hcmut.edu.vn',
  };
  const handleLogin = async () => {
    try {
      // Simulating an asynchronous login request to a server
      const loginResponse = await new Promise((resolve) =>
        setTimeout(() => resolve(fakeUser), 2500)
      );

      // Check if the login was successful based on the response
      if (loginResponse) {
        // Update the user state or set a token in local storage
        setIsLoggedIn(true);
        console.log('Login successful:', loginResponse);

        // Redirect to the homepage
        navigate('/');
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = () => {
    // Simulating a logout action
    // For simplicity, we directly update the user state
    setIsLoggedIn(false);
    console.log('Logout successful');

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <IoMdPrint className='navbar-icon' />
              SPSS-Smart Printing Service
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Manage Printer
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-btn'>
                {isLoggedIn ? (
                  <Button buttonStyle='btn--outline' onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  button ? (
                    <Link to='/sign-in' className='btn-link'>
                      <Button buttonStyle='btn--outline' onClick={handleLogin}>
                        SIGN IN
                      </Button>
                    </Link>
                  ) : (
                    <Link to='/sign-in' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={handleLogin}
                      >
                        SIGN IN
                      </Button>
                    </Link>
                  )
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
