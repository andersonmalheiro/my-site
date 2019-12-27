import React from 'react';

import Layout from '../../components/layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

import styles from './styles.module.css';
import { FaEnvelope } from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <Image className={styles.avatar} />
      <h1>Anderson Malheiro de Carvalho</h1>
      <h2>Desenvolvedor Front-end</h2>
      <a
        href="mailto:malheiroanderson97@gmail.com"
        className={`${styles.button} ${styles.btn_blue}`}
      >
        <FaEnvelope className={styles.btn_prefix} />
        Entre em contato
      </a>
      <div className={styles.divider}></div>
      <p>
        Olá, sou o Anderson. Sou técnico em Redes de Computadores e bacharel em
        Sistemas de Informação pela{' '}
        <a
          href="https://www.fapce.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faculdade Paraíso do Ceará
        </a>
        . Sou um cara apaixonado por tecnologia, games e amo a área de
        desenvolvimento.
      </p>
      <p>
        Atualmente sou desenvolvedor front-end na{' '}
        <a
          href="https://www.brisanet.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brisanet Telecomunicações
        </a>
        , trabalhando principalmente no desenvolvimento e manutenção dos
        sistemas internos da empresa.
      </p>
      <div className={styles.divider}></div>
      <h2>Minha stack</h2>
      <div className={styles.stack}>
        <img
          className={styles.tech}
          src={'assets/icons/javascript.png'}
          alt="javascript"
        />
        <img
          className={styles.tech}
          src={'assets/icons/typescript.png'}
          alt="typescript"
        />
        <img
          className={styles.tech}
          src={'/assets/icons/node.png'}
          alt="node"
        />
        <img
          className={styles.tech}
          src={'/assets/icons/react.png'}
          alt="react"
        />
        <img
          className={styles.tech}
          src={'/assets/icons/redux.png'}
          alt="redux"
        />
        <img
          className={styles.tech}
          src={'assets/icons/angular.png'}
          alt="angular"
        />
        <img
          className={styles.tech}
          src={'assets/icons/python.png'}
          alt="python"
        />
        <img
          className={styles.tech}
          src={'assets/icons/django.png'}
          alt="django"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
