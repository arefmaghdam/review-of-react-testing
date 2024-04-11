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
    </div>
  );
};

export default ReactTestingProvider;
