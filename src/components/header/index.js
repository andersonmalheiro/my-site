import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  {
    to: '/',
    name: 'Home',
  },
  // {
  //   to: '/posts',
  //   name: 'Posts',
  // },
];

const Header = ({ siteTitle }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className="header">
      <div className="main-header">
        <div className="brand">
          <h1 className="title">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              AMC
            </Link>
          </h1>
        </div>
        <div className="links">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.to}
                className={pathname === link.to ? 'link link-current' : 'link'}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="social-media">
          <div className="icon">
            <a href="https://instagram.com/_anderson_97">
              <FaInstagram />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/andersonmalheiro">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/andersonmalheiro">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <div className="links">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.to}
                className={pathname === link.to ? 'link link-current' : 'link'}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="social-media">
          <div className="icon">
            <a href="https://instagram.com/_anderson_97">
              <FaInstagram />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/andersonmalheiro">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/andersonmalheiro">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
