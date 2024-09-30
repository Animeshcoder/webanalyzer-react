import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  const links = [
    { to: "/", label: props.link1 },
    { to: "/services", label: props.link2 },
    { to: "/analyzer", label: props.link3 },
    { to: "/profile", label: props.link4 },
    { to: "/learn", label: props.link5 },
  ];

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img src='' className="navbar-image1" />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            {links.map((link, index) => (
              <Link key={index} to={link.to} className="thq-body-small thq-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
          </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img alt={props.logoAlt} src={props.logoSrc} className="navbar-logo" />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              {links.map((link, index) => (
                <Link key={index} to={link.to} className="thq-body-small thq-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  logoSrc: '',
  logoAlt: '',
  link1: 'Home',
  link2: 'Services',
  link3: 'Analyzer',
  link4: 'Profile',
  link5: 'Learn',
};

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
};

export default Navbar;
