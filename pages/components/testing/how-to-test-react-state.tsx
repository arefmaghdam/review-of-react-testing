import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const HowToTestReactState = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to test or check state using Enzyme, so we write below test:

      test("counter starts at 0", () => {
        const wrapper = setup()
        const initialCounterState = wrapper.state("counter")
        expect(initialCounterState).toBe(0)
      })

    // App.js codes are functional base and enzyme doesnt support functional components state and we must change codes to class base components:

      import React from "react"
      import "./App.css"

      class App extends React.Component {
        constructor(props) {
          super(props)

          this.state = {counter: 0}
        }
        
        render() {
          return (
            <div data-test="component-app" >
              <h1 data-test="counter-display">The counter is currently</h1>
              <button data-test="increment-button">Increment Counter</button>
            </div>
          )
        }
      }
      `}
      />
    </div>
  );
};

export default HowToTestReactState;
