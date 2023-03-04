import { useState } from "react";
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
  const [clickedTech, setClickedTech] = useState("");

  const handleIconClick = (techName) => {
    if (clickedTech === techName) {
      setClickedTech("");
    } else {
      setClickedTech(techName);
    }
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("HTML")}
      >
        <AiFillHtml5 />
        {clickedTech === "HTML" && (
          <div className={styles.techName}>{"HTML"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("CSS")}
      >
        <DiCss3 />
        {clickedTech === "CSS" && (
          <div className={styles.techName}>{"CSS"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("JavaScript")}
      >
        <SiJavascript />
        {clickedTech === "JavaScript" && (
          <div className={styles.techName}>{"JavaScript"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("TypeScript")}
      >
        <SiTypescript />
        {clickedTech === "TypeScript" && (
          <div className={styles.techName}>{"TypeScript"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Python")}
      >
        <DiPython />
        {clickedTech === "Python" && (
          <div className={styles.techName}>{"Python"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("React")}
      >
        <DiReact />
        {clickedTech === "React" && (
          <div className={styles.techName}>{"React"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Node.js")}
      >
        <DiNodejs />
        {clickedTech === "Node.js" && (
          <div className={styles.techName}>{"Node.js"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("MySQL")}
      >
        <GrMysql />
        {clickedTech === "MySQL" && (
          <div className={styles.techName}>{"MySQL"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("MongoDB")}
      >
        <DiMongodb />
        {clickedTech === "MongoDB" && (
          <div className={styles.techName}>{"MongoDB"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("PostgreSQL")}
      >
        <SiPostgresql />
        {clickedTech === "PostgreSQL" && (
          <div className={styles.techName}>{"PostgreSQL"}</div>
        )}
      </Col>
    </Row>
  );
}

export default Techstack;
