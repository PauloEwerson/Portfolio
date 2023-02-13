import React from "react";
import styles from './styles.module.css';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/perfil-image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const mySelf = () => {
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container>
        <Row>
        <Col md={4} className={styles.myAvtar}>
            <Tilt>
              <img src={myImg} className={styles.imgFluid} alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className={styles.homeAboutDescription}>
            <h1 style={{ fontSize: "2.6em" }}>
              Deixa eu <span className="green"> me apresentar </span> melhor
            </h1>
            <p className={styles.homeAboutBody}>
              Sou apaixonado por programação e pela possibilidade de resolver problemas com ela.
              (Além de ser a forma mais próxima de ter super poderes), eu acho... 🤷‍♂️
              <br />
              <br />
              Formado em Análise e Desenvolvimento de Sistemas,
              onde minha área de interesse é a construção de novas &nbsp;
              <i>
                <b className="green">Tecnologias Web e Produtos. </b>
              </i>
              <br /> Além disso estou sempre em busca de novos conhecimentos.
              <br />
              <br />
              Quando possível, também aplico minha paixão pelo desenvolvimento de produtos com <b className="green">Node.js</b> e
              <i>
                <b className="green">
                  {" "}
                  frameworks Javascript modernas
                </b>
              </i>
              &nbsp; como o
              <i>
                <b className="green"> React.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={styles.homeAboutSocial}>
            <h1>ME ENCONTRE</h1>
            <p>
            Sinta-se livre para <span className="green">se conectar </span>comigo
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href="https://github.com/PauloEwerson"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.homeSocialIcons}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/PauloEwerson/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.homeSocialIcons}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default mySelf;
