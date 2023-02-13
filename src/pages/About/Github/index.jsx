import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import styles from './styles.module.css';

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className={styles.projectHeading}>
        Dias de <strong className="green">código</strong>
      </h1>
      <GitHubCalendar
        username="PauloEwerson"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
