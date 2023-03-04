import { useState } from "react";
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
  const [clickedTech, setClickedTech] = useState("");

  const handleIconClick = (toolName) => {
    if (clickedTech === toolName) {
      setClickedTech("");
    } else {
      setClickedTech(toolName);
    }
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Linux")}
      >
        <SiLinux />
        {clickedTech === "Linux" && (
          <div className={styles.toolName}>{"Linux"}</div>
        )}
      </Col>
      <Col 
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("VSCode")}
      >
        <SiVisualstudiocode />
        {clickedTech === "VSCode" && (
          <div className={styles.toolName}>{"VSCode"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Insomnia")}
      >
        <SiInsomnia />
        {clickedTech === "Insomnia" && (
          <div className={styles.toolName}>{"Insomnia"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Github")}
      >
        <AiFillGithub />
        {clickedTech === "Github" && (
          <div className={styles.toolName}>{"Github"}</div>
        )}
      </Col>
      <Col
        xs={4}
        md={2}
        className={styles.techIcons}
        onClick={() => handleIconClick("Figma")}
      >
        <SiFigma />
        {clickedTech === "Figma" && (
          <div className={styles.toolName}>{"Figma"}</div>
        )}
      </Col>
    </Row>
  );
}

export default Toolstack;
