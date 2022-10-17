import React from "react";
import styles from './styles.module.css';

function ComingSoon() {
  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper }>
        <div className={ styles.content }>
          <div lassName={ styles.item }>
            <h1>EM CONSTRUÇÃO</h1>
            <p>Aguarde.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComingSoon;
