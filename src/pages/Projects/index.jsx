import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCards";
import Particle from "../../components/Particle";
import TFC from "../../Assets/Projects/TFC.png";
import npsMail from "../../Assets/Projects/npsMail.png";
import Proffy from "../../Assets/Projects/Proffy.png";
import styles from './styles.module.css';

function Projects() {
  return (
    <Container fluid className={styles.projectSection}>
      <Particle />
      <Container>
        <h1 className={styles.projectHeading}>
          Meus <strong className="green">Projetos </strong>
        </h1>
        <p>
          Aqui estão alguns projetos em que trabalhei.
        </p>
        <Row className={styles.row}>
          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={TFC}
              isBlog={false}
              title="TFC"
              description="O TFC é uma aplicação informativa sobre partidas e classificações de futebol, desenvolvido durante o módulo de backend no curso de desenvolvimento web na Trybe, com objetivo de entender como se dá a integração entre front e back-end (com banco de dados), e como essa configuração pode ser feita utilizando o Docker Compose."
              ghLink="https://github.com/PauloEwerson/TFC-Trybe-Futebol-Clube"
              // demoLink=""
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={Proffy}
              isBlog={false}
              title="Proffy"
              description="O Proffy é uma aplicação Web desenvolvida para auxiliar a conexão entre os alunos e professores, possibilitando registrar aulas, adicionar informações como a disciplina, custo e horário das aulas, bem como a possibilidade de buscar pelas aulas cadastradas."
              ghLink="https://github.com/PauloEwerson/Proffy"
              // demoLink=""
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={npsMail}
              isBlog={false}
              title="npsMail"
              description="O npsMail é uma aplicação que consiste em calcular o NPS da empresa, desenvolvido durante a trilha de NodeJS, na quarta edição da NLW. Aprendemos conceitos sobre o que é uma API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail."
              ghLink="https://github.com/PauloEwerson/npsMail"
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
