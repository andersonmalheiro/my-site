import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
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
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/" className="link">
        Posts
      </Link>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
