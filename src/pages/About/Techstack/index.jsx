import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import {
  DiCss3,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import styles from './styles.module.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <GrMysql />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
