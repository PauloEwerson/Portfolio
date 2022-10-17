import React from "react";
import styles from './styles.module.css';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Type from "./Type";
import heroImage from "../../Assets/heroImage.svg";

function Home() {
  return (
    <section>
      <Container fluid className={styles.heroSection} id="home">
        <Particle />
        <Container className={styles.homeContent}>
          <Row>
            <Col md={7} className={styles.homeHeader}>
              <h1 className={styles.heroheading}>
                Olá{" "}
                <span className={styles.wave} role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className={styles.heroHeadingName}>
                EU SOU
                <strong className={styles.mainName}> PAULO EWERSON </strong>
              </h1>

              <div className={styles.heroType}>
                <Type />
              </div>
            </Col>

            <Col md={5} className={styles.heroCol}>
              <img
                src={heroImage}
                alt="imagem inicial"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
