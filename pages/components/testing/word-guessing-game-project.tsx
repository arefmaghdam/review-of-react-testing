import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const WordGuessingGameProject = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../assets/images/01.png"
        content={`
    // we want to develop a word guessing game project, this project has 3 component:
    // 1 input
    // 2 guess words
    // 3 congrats
    // we must create a components folder that contains 3 folder: 1 congrats 2 ... 3 ...
    // we create a components/congrats/Congrats.js
    // also we create a congrats/__tests__/Congrats.test.js
    // Congrats.test.js codes:

        import React from "react"
        import Enzyme, {shallow} from "enzyme"
        import Adapter from "@Wojtekma/enzyme-adapter-react-17"
        import Congrats from "../Congrats"

        Enzyme.configure({adapter: new Adapter()})

        const setup = (props) => {
            return shallow(<Congrats {...props} />)
        }

        const findByTestAttr = (wrapper, val) => {
            return wrapper.find('[data-test="{val}"]'')
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

    // Congrats.js codes:

        import React from "react"

        const Congrats = (props) => {
            if(props.success) {
                return (
                    <div data-test="component-congrats">
                        <span data-test="congrats-message">
                            Congratolations! You guessed the word!
                        </span>
                    </div>
                )
            } else {
                return (
                    <div data-test="component-congrats"></div>
                )
            }
        }

        export default Congrats
      `}
      />
    </div>
  );
};

export default WordGuessingGameProject;

// return wrapper.find(`[data-test="${val}"]`)
