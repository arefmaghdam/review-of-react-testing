import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const History = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // In 1991, a Finnish student started an operating system called GNU in his dormitory as an open source, and then another student came and wrote the kernel of this operating system from scratch
    // and then the GNU company liked the code of this student and added it to the operating system. GNU adds and the name of this operating system becomes GNU-Linux
    // this student was Linus Torvalds
    // Since Linus had written a very good code and the project was open source, a large number of developers joined to this project, and they had written almost 8 million lines of code and 1000 developers had worked
    // Linus couldnt code. He would review the other developers and fix the bugs and add them to the main project. After a while, Linus came to the conclusion that he should do these things with a tool
    // and in 2005, the first version of the version control tool was released. It publishes itself under the name of Git
        `}
      />
    </div>
  );
};

export default History;
