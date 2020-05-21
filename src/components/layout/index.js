import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import Helmet from 'react-helmet';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  MdHome,
  MdInfo,
  MdDeveloperBoard,
  MdEmail,
  MdMessage,
} from 'react-icons/md';

const Layout = ({ children }) => {
  const [showSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
        <link
          href="https://unpkg.com/css.gg/icons-compressed/icons.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className="wrapper">
        {children}

        <div className="floatingButton" onClick={() => toggleSocial()}>
          <MdMessage className="icon" />
        </div>

        {showSocial && (
          <React.Fragment>
            <a
              href="https://www.instagram.com/_anderson_97"
              target="_blank"
              rel="noopener noreferrer"
              className={`social bottom ${showSocial ? 'fade-in-bottom' : ''}`}
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/andersonmalheiro"
              target="_blank"
              rel="noopener noreferrer"
              className={`social mid ${showSocial ? 'fade-in-bottom' : ''}`}
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/andersonmalheiro"
              target="_blank"
              rel="noopener noreferrer"
              className={`social midder ${showSocial ? 'fade-in-bottom' : ''}`}
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="mailto:malheiroanderson97@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`social top ${showSocial ? 'fade-in-bottom' : ''}`}
            >
              <MdEmail className="icon" />
            </a>
          </React.Fragment>
        )}
        <div className="bottomMenu">
          <div className="links">
            <a href="#home">
              <MdHome className="icon" />
            </a>
            <a href="#about">
              <MdInfo className="icon" />
            </a>
            <a href="#portfolio">
              <MdDeveloperBoard className="icon" />
            </a>
            <div onClick={() => toggleSocial()}>
              <MdMessage className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
