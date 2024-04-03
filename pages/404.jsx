import React from "react";
import styles from "../styles/Home.module.css";
import CodePreview from "./components/code-preview";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.subPages}>
      <div>
        <h1>this page not found!</h1>
      </div>
      <Link href="/">back</Link>
    </div>
  );
};

export default NotFound;
