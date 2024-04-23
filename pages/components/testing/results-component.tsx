import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ResultsComponent = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    
    // we want to develop the results component using TDD metodology
    // for tests, we create a src/components/guessWord/__tests__/GuessedWords.test.js
    // GuessedWords.test.js codes:

        import React from "react"
        import {shallow} from "enzyme"
        import {findByTestAttr, checkProps} from "../../../test/testUtils"
        import GuessedWords from "../GuessedWords"

        // we want to define a default props that when we render a component without props, we dont have error as a initial props
        const defaultProps = {
            guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
        }

        const setup = (props={}) => {
            const setupProps = {...defaultProps, ...props}
            return shallow(<GuessedWords {...setupProps} />)
        }

        test('should not throw warning with expected props', () => {
            checkProps(GuessedWords, defaultProps)
        })

        // we have 2 state in guessedWord, 1 user enter a word 2 user doesnt enter a word, so we must to use describe for this 2 test:
        // describe help us to separate our tests:

            describe("if there are not words guessed", () => {
                let wrapper;
                
                beforeEach(() => {
                    wrapper = setup({guessedWords: []})
                })

                test('should renders without error', () => {
                  const component = findByTestAttr(wrapper, "component-guessed-words")
                  expect(component.length).toBe(1)
                })

                test('should renders instructions to guess a word', () => {
                    const instructions = findByTestAttr(wrapper, "guess-instructions")
                    expect(instructions.text().length).not.toBe(0)
                })
            })

            describe("if there are words guessed", () => {
                let wrapper;

                const guessedWordsProps = [
                    { guessedWord: "train", letterMatchCount: 3}
                    { guessedWord: "agile", letterMatchCount: 1}
                    { guessedWord: "party", letterMatchCount: 5}
                ]
                
                beforeEach(() => {
                    wrapper = setup({guessedWords: guessedWordsProps})
                })

                test('should renders without error', () => {
                  const component = findByTestAttr(wrapper, "component-guessed-words")
                  expect(component.length).toBe(1)
                })

                test('should renders "guessed words" section', () => {
                    const guessedWordsSection = findByTestAttr(wrapper, "guessed-words")
                    expect(guessedWordsSection.length).toBe(1)
                })

                test('correct number of guessed words depends on props', () => {
                    const guessedWordsNumber = findByTestAttr(wrapper, "guessed-word")
                    expect(guessedWordsNumber.length).toBe(guessedWordsProps.length)
                })
            })

    // for app codes, we create a src/components/guessWord/GuessedWords.js
    // GuessedWords.js codes:

        import React from "react"   
        import PropTypes from "prop-types"

        const GuessedWords = (props) => {
            let content;
            if(props.guessedWords.length === 0) {
                content = (
                    <span data-test = "guess-instructions">
                        Try to guess the secret word!
                    </span>
                )
            } else {
                const guessedWordsRows = props.guessedWords.map((word, index) => (
                    <tr data-test = "guessed-word" key={index}>
                        <td>{word.guessedWord}</td>
                        <td>{word.letterMatchCount}</td>
                    </tr>
                ))

                content = (
                    <div data-test = "guessed-words">
                        <h3>Guessed Words</h3>
                        <table>
                            <thead>
                                <tr><th>Guess</th><th>Matching Letters</th></tr>
                            </thead>
                            <tbody>
                                {guessedWordsRows}
                            </tbody>
                        </table>
                    </div>
                )
            }
            return (
                <div data-test = "component-guessed-words">
                    {content}
                </div>
            )
        }

        GuessedWords.propTypes ={
            guessedWords: PropTypes.arrayOf(
                PropTypes.shape({
                    guessedWord: PropTypes.string.isRequired,
                    letterMatchCount: PropTypes.nmber.isrequired,
                })
            ).isRequired,
        }

        export default GuessedWords        
      `}
      />
    </div>
  );
};

export default ResultsComponent;
