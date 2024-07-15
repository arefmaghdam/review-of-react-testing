import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const WhatDoesReduxSolve = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Suppose we have 5 nested components and we have a state in the outermost component which is the parent component,
    // now if we want to access the state from the innermost component, we have to pass the state 5 times to reach the innermost component
    // and this is the same problem drilling down state is that this problem becomes worse and more complicated as the application grows,
    // and as a result, we will not have an optimal application because the middle components may not need that state at all, but we have to pass.
    // To solve this problem, we take the desired state and place it outside the dom tree. In this case, only any component that needs state can get it and use it.
    // Also, all components have the ability to update the state value, and from now on, the rest of the components will see the updated state value.
    // This approach is known as globally managed state, and Redux is a tool that allows us to implement the globally managed state approach,
    // which can be used with all front-end frameworks, but is mostly used with Ricketts.
    // In the next section we will talk about redux terminology or data flow in redux
        `}
      />
    </div>
  );
};

export default WhatDoesReduxSolve;
