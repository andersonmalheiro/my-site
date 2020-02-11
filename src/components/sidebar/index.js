import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';

export default function Sidebar() {
  const [currentUrl, setCurrentUrl] = useState('');

  const [links, setLinks] = useState([
    {
      name: 'Home',
      hash: '#home',
      selected: true,
    },
    {
      name: 'Sobre',
      hash: '#about',
      selected: currentUrl === '#about',
    },
    {
      name: 'Porfolio',
      hash: '#portfolio',
      selected: currentUrl === 'portfolio',
    },
  ]);

  useEffect(() => {
    setCurrentUrl(window.location.hash);
  }, []);

  const toggleSelected = currentLink => {
    const tmp = links.map(link => {
      if (link.hash === currentLink.hash) {
        link.selected = true;
      } else {
        link.selected = false;
      }
      return link;
    });

    setLinks(tmp);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h1>AMC</h1>
      </div>
      <div className={styles.sidebarLinks}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.hash}
            className={link.selected ? styles.linkSelected : undefined}
            onClick={() => toggleSelected(link)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
