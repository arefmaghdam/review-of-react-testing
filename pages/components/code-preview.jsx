import React from "react";
import styles from "../../styles/Home.module.css";

const CodePreview = ({ content, imgURL }) => {
  return (
    <div className={styles.codeConainer}>
      <pre>
        <code>{content}</code>
      </pre>
      {imgURL && <img src={imgURL} className={styles.imageStyles} />}
    </div>
  );
};

export default CodePreview;
