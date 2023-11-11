import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import styles from './styles.module.css';

function ProjectCards(props) {
  return (
    <Card className={styles.projectCardView}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={styles.cardText}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.isBlog ? <CgWebsite /> : <BsGithub />} &nbsp;
          {props.isBlog ? "Demo" : "GitHub"}
        </Button>

        {"\n"}
        {"\n"}


        {/* Se o componente contiver um link de demonstração e não for um blog, 
        ele renderizará o componente abaixo */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
