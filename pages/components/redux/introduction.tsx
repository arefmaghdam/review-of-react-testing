import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const Introduction = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this course we are going to cover redux toolkit in great detail and we are going to learn how to utilize this wonderful technology
    // inside of our react application. after this course you should be able to learn about redux toolkit and apply the concepts inside of your react app
    // so what we are going to do is we are going to learn exactly what redux is? what it solves? and then we are going to learn about the theory of redux and 
    // some of the data flow and then of course we are going to go ahead and code out an application using redux toolkit
    // lets just start talking about redux and what problems it solves
        `}
      />
    </div>
  );
};

export default Introduction;
