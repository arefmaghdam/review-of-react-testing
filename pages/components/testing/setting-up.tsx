import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const SettingUp = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    //    
      `}
      />
    </div>
  );
};

export default SettingUp;
