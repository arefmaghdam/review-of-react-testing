import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const GitHubGitLab = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // So far we have learned how to work with Git ourselves, now in order to be able to work together on a project, we need to learn from a series of other things,
    // there is a concept called remote, which means that we can use our repository. instead of having it only on our own system, we can also have it on another system or server, 
    // which is called a remote repository. For this, it is enough to have a server and raise the git on it, but since the cost of maintaining the server is high and 
    // it may take a lot of time to configure it, there are a series of services that do this for us. Like Github and GitLab, 
    // Github is usually used for open source projects and GitLab is used for private projects.
        `}
      />
    </div>
  );
};

export default GitHubGitLab;
