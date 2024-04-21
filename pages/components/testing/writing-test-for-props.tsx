import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const WritingTestForProps = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    
    // we want to writing tests for props and checking it, so we should to use prop-types tool in Enzyme
    // installation: 

      npm install --save-dev check-prop-types

    // importing: 

      import checkPropTypes from "check-prop-types"

    // we can optimize the function that used in every where, so we can write functions into a separate js file
    // we define a folder named test in the root of app and inside the src folder and create a testUtils.js file
    // src/test/testUtils.js codes:

        import checkPropTypes from "check-prop-types"        

        export const findByTestAttr = (wrapper, val) => {
          return wrapper.find('[data-test="{val}"]'')
        }

        export const checkProps = (component, templateProps) => {
          const PropError = checkPropTypes(
            component.propTypes, 
            templateProps,
            "prop",
            component.name
          )
          expect(propError).toBeUndefined()
        }


    // Congrats.test.js codes:

      import React from "react"
      import Enzyme, {shallow} from "enzyme"
      import Adapter from "@Wojtekma/enzyme-adapter-react-17"
      import Congrats from "../Congrats"
      import checkPropTypes from "check-prop-types"
      import {findByTestAttr, checkProps} from "../../../test/testUtils"

      Enzyme.configure({adapter: new Adapter()})

      const setup = (props) => {
          return shallow(<Congrats {...props} />)
      }

      // we should write some tests as below:
      // test 1: for ckeck rendering the congrats component in screen without error

          test('should renders without error', () => {
            const wrapper = setup()
            const component = findByTestAttr(wrapper, "component-congrats")
            expect(component.length).toBe(1)
          })

      // test 2: for check displaying congratulation message when user is winner

          test('should renders message congratulation when "success" prop is true', () => {
            const wrapper = setup({success: true})
            const message = findByTestAttr(wrapper, "congrats-message")
            expect(message.text().length).not.toBe(0)
          })

      // test 3: for check displaying empty message when user is loser

          test('should not renders message congratulation when "success" prop is false', () => {
            const wrapper = setup({success: false})
            const component = findByTestAttr(wrapper, "component-congrats")
            expect(component.text()).toBe("")
          })

      // test 4: for check props type and prevent error

          test('should to check props and prevent error or customized error', () => {
            const expectedProps = {success: false}
            checkProps(Congrats, expectedProps)
          })

      `}
      />
    </div>
  );
};

export default WritingTestForProps;
