import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import {
  SiLinux,
  SiVisualstudiocode,
  SiInsomnia,
  SiFigma,
} from "react-icons/si";
import styles from './styles.module.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
