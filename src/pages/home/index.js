import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import styles from './styles.module.scss';
import Sidebar from '../../components/sidebar';

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Sidebar />
      <div className={styles.content}>
        <section id="home" className={styles.sectionHome}>
          <div className={styles.me}>
            <img src={'/assets/me.jpg'} alt="me" className={styles.avatar} />
            <h1 className={styles.title}>Anderson Malheiro de Carvalho</h1>
            <h2 className={styles.subtitle}>Front-end Developer</h2>
          </div>
        </section>
        <section id="about" className={styles.sectionAbout}>
          <div className={styles.about}>
            <h1>Sobre mim</h1>
            <p>
              Olá, sou o Anderson. Sou técnico em Redes de Computadores e
              bacharel em Sistemas de Informação pela Faculdade Paraíso do
              Ceará. Sou um cara apaixonado por tecnologia, games e amo a área
              de desenvolvimento.
            </p>
            <p>
              Atualmente sou desenvolvedor front-end na Brisanet
              Telecomunicações, trabalhando principalmente no desenvolvimento e
              manutenção dos sistemas internos da empresa.
            </p>
            <div className={styles.divider}></div>
            <h1>Minha stack</h1>
            <br />
            <h3>Linguagens</h3>
            <div className={styles.technologies}>
              <div className={styles.card}>
                <i className="devicon-javascript-plain colored"></i>
                <span>Javascript</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-typescript-plain colored"></i>
                <span>TypeScript</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-python-plain"></i>
                <span>Python</span>
              </div>
            </div>
            <div className={styles.divider}></div>
            <h3>Tecnologias</h3>
            <div className={styles.technologies}>
              <div className={styles.card}>
                <i className="devicon-nodejs-plain colored"></i>
                <span>NodeJS</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-react-original colored"></i>
                <span>ReactJS</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-react-original"></i>
                <span>React Native</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-angularjs-plain colored"></i>
                <span>Angular 2+</span>
              </div>
              <div className={styles.card}>
                <i className="devicon-django-plain colored"></i>
                <span>Django</span>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className={styles.sectionAbout}>
          <div className={styles.about}>
            <h1>Portfólio</h1>
            <p>Em desenvolvimento...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
