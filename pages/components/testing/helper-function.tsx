import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const HelperFunction = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develope a helper function that help us to compare two words and display us same characters
    // so we create a src/helpers/index.js and src/helpers/index.test.js 
    // index.test.js codes:

        import {getLetterMatchCount} from "./"

        describe("getLetterMatchCount", () => {
            const secertWord = "party"

            test('should returns correct count when there are not matching letters ', () => {
                const getLetterMatchCount = getLetterMatchCount("bones", secretWord)
                expect(getLetterMatchCount).toBe(0)
            })

            test('should returns the correct count when ther are 3 matching letters', () => {
                const getLetterMatchCount = getLetterMatchCount("train", secretWord)
                expect(getLetterMatchCount).toBe(3)
            })

            test('should returns correct count when there are duplicate letters in the guess ', () => {
                const getLetterMatchCount = getLetterMatchCount("parka", secretWord)
                expect(getLetterMatchCount).toBe(3)
            })
            
        })

    // index.js codes:

        export function getLetterMatchCount(guessedWord, secretWord) {
            const secretLetterSet = new Set(secretWord.split(""))
            const guessedLetterSet = new Set(guessedWord.split(""))
            return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
        }
      `}
      />
    </div>
  );
};

export default HelperFunction;
