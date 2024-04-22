import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestsOptimization = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    
    // we have some tasks that execute before all of the tests and some tasks after all of the tests
    // we can take these tasks into a separate file and optimize the test codes
    // we have a default file that named setupTests.js that we can take these tasks into that
    // setupTests.js codes execute before all of the tests that decrease codes and optimize the app
    // setupTests.js codes:

        import "@testing-library/jest-dom"
        import Enzyme from "enzyme"
        import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

        Enzyme.configure({adapter: new Adapter()})

    // so Congrate.test.js codes are:

        import React from "react";
        import Congrats from "../Congrats";
        import {shallow} from "enzyme"
        import { checkProps, findByTestAttr } from "../../../test/testUtils";

        const setup = (props) => {
          return shallow(<Congrats {...props} />);
        };

        test("should renders without error", () => {
          const wrapper = setup();
          const component = findByTestAttr(wrapper, "component-congrats");
          expect(component.length).toBe(1);
        });

        test('should renders message congratulation when "success" prop is true', () => {
          const wrapper = setup({ success: true });
          const message = findByTestAttr(wrapper, "congrats-message");
          expect(message.text().length).not.toBe(0);
        });

        test('should not renders message congratulation when "success" prop is false', () => {
          const expectedProps = { success: false };
          checkProps(Congrats, expectedProps);
        });
      `}
      />
    </div>
  );
};

export default TestsOptimization;
