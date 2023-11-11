import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCards";
import Particle from "../../components/Particle";
import PEDIDOS from "../../Assets/Projects/pedidos.png";
import RECARGAS from "../../Assets/Projects/recargas.png";
import TEAMS from "../../Assets/Projects/teams.png";
import CEED from "../../Assets/Projects/ceed.png";
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
              imgPath={PEDIDOS}
              isBlog={true}
              title="Controle de Pedidos"
              description="Sistema de gerenciamento de pedidos, projetado para facilitar o rastreamento e a organização de pedidos por clientes e datas. Ele apresenta funcionalidades de agrupamento de pedidos, permitindo uma visão mais estruturada e ordenada. A aplicação é construída com PHP e JavaScript, com uma interface de usuário intuitiva e eficiente."
              ghLink="https://self-justifying-dep.000webhostapp.com/"
              demoLink="https://self-justifying-dep.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={RECARGAS}
              isBlog={false}
              title="Ranking de Recargas"
              description="Ferramenta dedicada a acompanhar as recargas de celulares pré-pagos em vista de uma meta mensal. Com ele, os usuários podem acessar informações detalhadas sobre: Venda acumulada, Venda do dia, Meta de venda para o dia, Média de vendas, Quantidade que falta para atingir a meta mensal, Projeção de quando a meta será atingida."
              ghLink="https://github.com/PauloEwerson/controle_recargas"
              demoLink="https://gutturalized-fees.000webhostapp.com/recargas/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={TEAMS}
              isBlog={false}
              title="TEAMS"
              description="O projeto Teams, desenvolvido em React-Native, organiza jogadores em turmas, permitindo cadastro/remoção de turmas/membros, armazenamento local e estilo consistente com o uso de Styled Components."
              ghLink="https://github.com/PauloEwerson/teams"
              demoLink="https://www.figma.com/proto/7ccBZRLLl7ga90OPeCnqzx/Teams?type=design&node-id=524-330&scaling=min-zoom&page-id=37%3A6"
            />
          </Col>
          
          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={CEED}
              isBlog={false}
              title="CEED"
              description="O projeto desenvolvido para o CEED é uma SPA moderna criada em React com uma estilização cuidadosa utilizando Tailwind CSS. A aplicação tem como objetivo fornecer aos usuários uma visibilidade sobre a escola."
              ghLink="https://github.com/PauloEwerson/ceed-web"
              demoLink="https://ceed.com.br/"
            />
          </Col>

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
