import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import styles from './styles.module.css';
import Aboutcard from "./Aboutcard";
import laptopImg from "../../Assets/about.png";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  return (
    <Container fluid className={styles.aboutSection}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className={styles.title}>
              Quem <strong className="purple">Sou Eu</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong className="green">profissionais </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="green">Ferramentas</strong> que utilizo
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
