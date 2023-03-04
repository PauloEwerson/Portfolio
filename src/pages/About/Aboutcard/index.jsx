import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from './styles.module.css';

function AboutCard() {
  return (
    <Card className={styles.quoteCardView}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="green">Paulo Ewerson, </span>
            natural da <span className="green"> morada do sol</span> Patos-PB.
            <br />Dei os primeiros passos na programação em 2011 
            no curso técnico do Instituto Federal da Paraíba 
            e desde então venho me aperfeiçoando.
            <br />
            <br />
            Além de codar, algumas outras atividades que eu curto fazer:
          </p>
          <ul>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Estar com os amigos
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Tocar violão
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Assistir Stand Up Comedy
            </li>
          </ul>

          <p className="green">
            "Minha paixão por aprender coisas novas me impulsiona a criar conexões significativas 
            com pessoas e tecnologias, expandindo constantemente meu conhecimento e horizontes."{" "}
          </p>
          <footer className={styles.blockquoteFooter}>`(Paulo Ewerson)`</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
