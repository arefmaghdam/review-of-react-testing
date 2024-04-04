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
    //  we want to learn writint tests in react using jest and enzyme with TDD methodology, this means we write test first and write codes after,
    // this way named TDD or red-green-testing, we creat an app:
    
      create-react-app demo
      cd demo
      npm start => run the app
      npm test => test the app tests in jest watch mode or test watch mode

    // how do work test in background using jest? when we write a test using jest, jest created a virtual browser into terminal that named JDOM, 
    // and do test for app.jsx and render into and do this word in development environment but not rean browser or real environment, this task is done by React-DOM for jest
    // how help enzyme to us? enzyme creates a virtual DOM for testing and allows testing without a browser, enzyme allows to search through DOM, enzyme selectors is same as JQuery style selectors
    // and we can simulate simple events, enzyme renders components only one level deep that named shallow rendering, this means enzyme dont enter into child components that optimized app testing speed
    // enzyme allows to access to props and state and allows to manipulate values and examine or test for values
    // how to install enzyme? 

      npm install --save-dev enzyme jest-enzyme
      npm install --save-dev @wojtekmaj/enzyme-adapter-react-17(version of your react)

    // how to config enzyme? go to app.test.js and write below codes:

      import Enzyme from "enzyme"
      import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
      import App from "./App"

      Enzyme.configure({adapter: new Adapter()})

      test('should ', () => {
        
      })
    
    // basic using enzyme:

      import Enzyme , {shallow} from "enzyme"
      import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
      import App from "./App"

      Enzyme.configure({adapter: new Adapter()})

      it('renders without crashing ', () => {
        const wrapper = shallow(<App />)
        console.log(wrapper.debug())  // output: App component contents as a string
      })
      
    // we write a simple test using jest as a train:

      import Enzyme , {shallow} from "enzyme"
      import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
      import App from "./App"

      Enzyme.configure({adapter: new Adapter()})

      it('renders without crashing ', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toBeTruthy() // jest command
      })
      `}
      />
    </div>
  );
};

export default SettingUp;
