import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import {
  FaExternalLinkAlt,
  FaGamepad,
  FaGuitar,
  FaFilm,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const HomePage = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchApi = () => {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer 52202d2579b9144b3d7f3fb2dd73417cffba7a79",
        },
        body: JSON.stringify({
          query: `
          query {
              user(login: "andersonmalheiro") {
                  pinnedItems(first: 10) {
                      nodes {
                          ... on Repository {
                              name,
                              description,
                              url
                          }
                      }
                  }
              }
          }
        `,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data && res.data.user) {
            const { pinnedItems } = res.data.user;
            if (pinnedItems.nodes && Array.isArray(pinnedItems.nodes)) {
              setProjects(pinnedItems.nodes);
            }
          }
        });
    };

    fetchApi();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Anderson Malheiro de Carvalho</title>
        <meta
          name="description"
          content="Anderson Malheiro de Carvalho | Frontend Developer"
        ></meta>
        <meta name="author" content="Anderson Malheiro de Carvalho"></meta>
        <meta name="og:title" content="Anderson Malheiro de Carvalho"></meta>
        <meta
          name="og:site_name"
          content="Anderson Malheiro de Carvalho"
        ></meta>
        <meta data-vue-tag="ssr" name="og:image" content="assets/me.jpg"></meta>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
      </Head>
      <div className={styles.layout}>
        <section id="home">
          <div className={`${styles.me} ${styles.spaceBetween}`}>
            <div>
              <h1 className={styles.title}>Anderson Malheiro de Carvalho</h1>
              <h2 className={styles.subtitle}>Front-end Developer</h2>

              <p>
                Olá! Sou técnico em Redes de Computadores e bacharel em Sistemas
                de Informação pela Faculdade Paraíso do Ceará. Sou um cara
                apaixonado por tecnologia, games e amo a área de
                desenvolvimento.
              </p>
              <p>
                Atualmente sou desenvolvedor front-end na Brisanet
                Telecomunicações, trabalhando principalmente no desenvolvimento
                e manutenção dos sistemas internos da empresa.
              </p>
            </div>
            <div
              className={`${styles.flexRow} ${styles.spaceBetween} ${styles.alignCenter}`}
            >
              <img src={"assets/me.jpg"} alt="me" className={styles.avatar} />
              <a
                href="https://github.com/andersonmalheiro"
                className={`${styles.flexRow} ${styles.spaceBetween} ${styles.alignCenter} ${styles.link}`}
                rel="noopener"
                rel="noreferrer"
              >
                <FaGithub style={{ marginRight: "5px" }} /> Github
              </a>
              <a
                href="http://linkedin.com/in/andersonmalheiro"
                className={`${styles.flexRow} ${styles.spaceBetween} ${styles.alignCenter} ${styles.link}`}
                rel="noopener"
                rel="noreferrer"
              >
                <FaLinkedin color="#33aada" style={{ marginRight: "5px" }} />{" "}
                Linkedin
              </a>
              <a
                href="https://twitter.com/a_malheiro97"
                className={`${styles.flexRow} ${styles.spaceBetween} ${styles.alignCenter} ${styles.link}`}
                rel="noopener"
                rel="noreferrer"
              >
                <FaTwitter color="#1da1f2" style={{ marginRight: "5px" }} />{" "}
                Twitter
              </a>
            </div>
          </div>
        </section>
        <div className={styles.content}>
          <section id="about">
            <div className={styles.about}>
              <h1>Informações</h1>
              <p>
                Algumas informações gerais, umas um pouco relevantes, outras nem
                tanto...
              </p>
              <br />
              <h3>Linguagens</h3>
              <div className={styles.technologies}>
                <div className={styles.card}>
                  <i className="devicon-html5-plain colored"></i>
                  <span>HTML 5</span>
                </div>
                <div className={styles.card}>
                  <i className="devicon-css3-plain colored"></i>
                  <span>CSS 3</span>
                </div>
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
              <h3>Ferramentas, Frameworks...</h3>
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

              <div className={styles.divider}></div>
              <h3>Hobbies</h3>
              <div className={styles.technologies}>
                <div className={styles.card}>
                  <FaGamepad color="#0083ff" size={30} />
                  <span>Jogos</span>
                </div>
                <div className={styles.card}>
                  <FaGuitar color="#b55a20" size={30} />
                  <span>Música</span>
                </div>
                <div className={styles.card}>
                  <FaFilm size={30} />
                  <span>Filmes/Séries</span>
                </div>
              </div>
            </div>
          </section>
          <section id="portfolio">
            <div className={styles.about}>
              <h1>Portfólio</h1>
              <p>
                Alguns projetos que fiz como desenvolvedor. Não trabalho com
                design, então em alguns projetos a parte de UI/UX foi feita por
                outra pessoa, mas toda a questão da implementação foi feita por
                mim.
              </p>

              <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                  <a
                    className={`${styles.projectCard} ${styles.link}`}
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    rel="noreferrer"
                  >
                    <div
                      className={`${styles.projectCardFooter} ${styles.flexColumn}`}
                    >
                      <div
                        className={`${styles.flexRow} ${styles.alignCenter} ${styles.spaceBetween}`}
                      >
                        <span className={styles.footerTitle}>
                          {project.name}
                        </span>
                        <FaExternalLinkAlt size={15} />
                      </div>
                      <div>
                        <small className={styles.footerDescription}>
                          {project.description}
                        </small>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
