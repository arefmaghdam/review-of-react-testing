import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestingRendering = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // src/components/Great.tsx codes:

        const Greet = ({ name }: { name?: string }) => {
            if (name) return <h1>Hello {name}</h1>;
      
            return <button>Login</button>;
            };
      
        export default Greet;

    // we need 2 tests cases in 1 testcase we provide a anme and assert that we have a heading with this content in the DOM
    // in the other test case we don't provide a name and assert that we have a login button in the DOM
    // tests/components/Great.test.tsx codes:

    import { render, screen } from '@testing-library/react'
    import Greet from "../../src/components/Greet";
    
        describe("Greet", () => {
          it("should render Hello with the name when name is provided", () => {
            render(<Greet name="Mosh" />);
            const heading = screen.getByRole("heading");
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent(/mosh/i);
          });
      
          it("should render login button when name is not provided", () => {
            render(<Greet />);
            const button = screen.getByRole("button");
            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/login/i);
          });
        });
    // if you search for react testing library queriesyou will find this page "testing-library.com/docs/queries/about/" for example: screen.getByRole()
    // if you're using jest you have to modify your import statementin this package we have a buch of custom matchers you can find them all by 
    // searching testing library jest dom in this page "github.com/testing-library/jest-dom" for example expect().toBeInTheDocument()
    // there is a problem with our setup every time we want to create a test filewe have to add these import statements on the top,
        import { it, expect, describe } from 'vitest'
        import "@testing-library/jest-dom/vitest
    // this is repetitive  and conversome so in this lesson I'm going to show you a few techniques for simplifying our test setup
    // first we don't have to imporrt these functions from vitest in every single test file, we can go to our vitest configuration file and turn on globals
    // so let's go to vitest.config.ts file:
        test: {
            environment: "jsdom",
            globals: true
        }
    // now we can remove the import { it, expect, describe } from 'vitest' statement
    // now here we get a bunch of compilation errorsfrom the typescript compiler on decribe word and expect word 
    // to fix this issue we have to go to our typescript configuration file which is tsconfig.json, here in the compiler options object 
    // we add a new property:
        {
            "CompilerOptions": {
                "types": ["vitest/globals"],
            }
        }
    // now the error should go away, there you go if this doesn't happen on your machine bring up the command pallet
    // and search for TypeScript: Reload Project so hat was the first improvement
    // now the second improvement again we don't want to import this : import "@testing-library/jest-dom/vitest in every test file to get access to these custom matchers
    // so let's go to our tests folder here we add a new file called setup.ts, tests/setup.ts codes:
        import "@testing-library/jest-dom/vitest
    // next we go to our vitest configuration file (vitest.config.ts) and refrence our setup file:
        test: {
            environment: "jsdom",
            globals: true,
            setupFiles: "tests/setup.ts"
        }
    // this setup file is run before each test file, its useful for configuring our testing environment, now because we have changed our vitest configuration file we have to go back to the terminal, stop this processand run our tests again:
        npm run test:ui
    
        `}
      />
    </div>
  );
};

export default TestingRendering;
