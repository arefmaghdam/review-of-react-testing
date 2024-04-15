import React from "react";
import Link from "next/link";

const ReactTestingProvider = () => {
  return (
    <div>
      <Link href="/components/testing/setting-up">setting-up</Link>
      <Link href="/components/testing/first-app-and-test">
        first-app-and-test
      </Link>
      <Link href="/components/testing/tests-contents-of-first-app">
        tests-contents-of-first-app
      </Link>
      <Link href="/components/testing/test-codes-optimization">
        test-codes-optimization
      </Link>
      <Link href="/components/testing/how-to-test-react-state">
        how-to-test-react-state
      </Link>
      <Link href="/components/testing/clicking-button-test">
        clicking-button-test
      </Link>
    </div>
  );
};

export default ReactTestingProvider;
