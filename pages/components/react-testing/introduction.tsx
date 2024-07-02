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
    // What you should know?
    // React
    // TypeScript
    // Unit Testing Fandamentals
    // What you'll learn?
    // Testing React C omponents
    // Mocking APIs
    // Testing Forms
    // Testing State Management 
    // Testing Routing
    // How to take this course?
    // Don't skip any lessons
    // Watch every single lessons
    // Exercises
      `}
      />
    </div>
  );
};

export default Introduction;
