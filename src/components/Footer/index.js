import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './styles.module.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles.footerCopywright}>
          <h3>By Paulo Ewerson</h3>
        </Col>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            <li className={styles.socialIcons}>
              <a
                href="https://github.com/PauloEwerson"
                style={{ color: "white" }}
                target="_blank" rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/PauloEwerson/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
