import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ClickingButtonTest = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to write a test for clicking button and increase counter, this test is a complex test and has more steps:
    // step 1: we declare a initial value for state into setup function:

        const setup = (props={}, state=null) => {
            const wrapper = shallow(<App {...props} />)
            if(state) wrapper.setState(state)
            return wrapper
        }

        test('clicking button increments counter display', () => {
          // step 1: declare a initial value for state:

          const counter = 7
          const wrapper = setup(null, {counter})

          // step 2: finding the buttton and clicking test:

          const button = findByTestAttr(wrapper, "increment-button")
          button.simulate("click")

          // step 3: finding display and testing its value:

          const counterDisplay = findByTestAttr(wrapper, "counter-display")
          expect(counterDisplay.text()).toContain(counter + 1)
        })

    // now we must define onClick event for button and display value for h1 tag:
    // App.js codes:
    
        <h1 data-test= "counter-displayu">The counter is currently {this.state.counter}</h1>
        <button onClick={() => this.setState({counter: this.state.counter + 1})} data-test="increment-button">Increment Counter</button>
      `}
      />
    </div>
  );
};

export default ClickingButtonTest;
