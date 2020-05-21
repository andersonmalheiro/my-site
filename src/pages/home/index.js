import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import './styles.scss';
import Sidebar from '../../components/sidebar';
import ReactImage from 'react-image';
import Slider from '../../components/slider';
import { FaGithub, FaEye } from 'react-icons/fa';

const randomId = () => {
  return Math.random()
    .toString(36)
    .substring(2);
};

const projects = [
  {
    id: randomId(),
    title: 'tmdbSearch',
    github: 'https://github.com/andersonmalheiro/tmbd-movies-app',
    previewImage: '/portfolio/movies-app/3.jpg',
    description:
      'App feito com React Native, consumindo a API do TMBD. É possível buscar filmes, ver seus detalhes e checar os filmes em cartaz.',
    images: [
      '/portfolio/movies-app/1.jpg',
      '/portfolio/movies-app/2.jpg',
      '/portfolio/movies-app/3.jpg',
      '/portfolio/movies-app/4.jpg',
    ],
  },
  {
    id: randomId(),
    title: 'Clone do Reddit',
    github: 'https://github.com/andersonmalheiro/reddit-clone',
    previewImage: '/portfolio/reddit-clone/1.png',
    description: 'Clone simples do Reddit, implementado em Angular. É possível criar comunidades, posts e adicionar comentários.',
    images: [
      '/portfolio/reddit-clone/1.png',
      '/portfolio/reddit-clone/2.png',
      '/portfolio/reddit-clone/3.png',
    ],
  },
];

const IndexPage = () => {
  const [showPreview, setShowPreview] = React.useState(false);
  const [currentImages, setCurrentImages] = React.useState([]);

  const togglePreview = project => {
    setShowPreview(true);
    setCurrentImages(project.images);
  };

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Sidebar />
        <div className="content">
          <section id="home" className="sectionHome">
            <div className="me">
              <img src={'/assets/me.jpg'} alt="me" className="avatar" />
              <h1 className="title">Anderson Malheiro de Carvalho</h1>
              <h2 className="subtitle">Front-end Developer</h2>
            </div>
          </section>
          <section id="about" className="sectionAbout">
            <div className="about">
              <h1>Sobre mim</h1>
              <p>
                Olá, sou o Anderson. Sou técnico em Redes de Computadores e
                bacharel em Sistemas de Informação pela Faculdade Paraíso do
                Ceará. Sou um cara apaixonado por tecnologia, games e amo a área
                de desenvolvimento.
              </p>
              <p>
                Atualmente sou desenvolvedor front-end na Brisanet
                Telecomunicações, trabalhando principalmente no desenvolvimento
                e manutenção dos sistemas internos da empresa.
              </p>
              <div className="divider"></div>
              <h1>Minha stack</h1>
              <br />
              <h3>Linguagens</h3>
              <div className="technologies">
                <div className="card">
                  <i className="devicon-javascript-plain colored"></i>
                  <span>Javascript</span>
                </div>
                <div className="card">
                  <i className="devicon-typescript-plain colored"></i>
                  <span>TypeScript</span>
                </div>
                <div className="card">
                  <i className="devicon-python-plain"></i>
                  <span>Python</span>
                </div>
              </div>
              <div className="divider"></div>
              <h3>Tecnologias</h3>
              <div className="technologies">
                <div className="card">
                  <i className="devicon-nodejs-plain colored"></i>
                  <span>NodeJS</span>
                </div>
                <div className="card">
                  <i className="devicon-react-original colored"></i>
                  <span>ReactJS</span>
                </div>
                <div className="card">
                  <i className="devicon-react-original"></i>
                  <span>React Native</span>
                </div>
                <div className="card">
                  <i className="devicon-angularjs-plain colored"></i>
                  <span>Angular 2+</span>
                </div>
                <div className="card">
                  <i className="devicon-django-plain colored"></i>
                  <span>Django</span>
                </div>
              </div>
            </div>
          </section>
          <section id="portfolio" className="sectionAbout">
            <div className="about">
              <h1>Portfólio</h1>
              <p>
                Alguns projetos que fiz como desenvolvedor. Não trabalho com
                design, então em alguns projetos a parte de UI/UX foi feita por
                outra pessoa, mas toda a questão da implementação foi feita por
                mim.
              </p>
              <div className="projectsContainer">
                {projects.map(project => (
                  <div className="projectCard" key={project.id}>
                    <div
                      className="projectCardContent"
                      onClick={() => togglePreview(project)}
                      style={{
                        backgroundImage: `url(${project.previewImage})`,
                      }}
                    >
                      <FaEye className="preview-icon" size={30} />
                    </div>
                    <div className="projectCardFooter flex-column">
                      <div className="flex-row align-center space-between">
                        <span className="footer-title">{project.title}</span>
                        <a
                          href={project.github}
                          className="link"
                          target="_blank"
                        >
                          <FaGithub size={20} />
                        </a>
                      </div>
                      <div>
                        <small className="footer-description">{project.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
      {showPreview && (
        <Slider
          data={currentImages}
          toggleShow={() => setShowPreview(false)}
          isShow={showPreview}
        />
      )}
    </>
  );
};

export default IndexPage;
