import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitInstallation = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we search install git in google and install it based on your operating system that it is windows for me. 
    // some configs after the git installation:
    // displaying the installation git version:
        git --version
    // displaying the list of git configs:
        git config --list
    // changing the name of git author to another name:
        git config --global user.name "another name"
    // changing the email of git to "another email":
        git config --global user.email "another email"
    // changing the default code editor to "another code editor":
        git config --global code.editor "another code editor address" for example: "c:\..."
        `}
      />
    </div>
  );
};

export default GitInstallation;
