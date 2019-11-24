import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/posts',
    name: 'Posts',
  },
];

const Header = ({ siteTitle }) => {
  const { pathname } = window.location;

  return (
    <header className="header">
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
        {links.map(link => {
          return (
            <Link
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
          <FaInstagram />
        </div>
        <div className="icon">
          <FaLinkedin />
        </div>
        <div className="icon">
          <FaGithub />
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
