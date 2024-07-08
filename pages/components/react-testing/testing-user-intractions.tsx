import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestingUserIntractions = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // lets see how we can test user intractionswe have a component called TermsAndConditions.tsx 
        import { useState } from "react";

        const TermsAndConditions = () => {
          const [isChecked, setIsChecked] = useState(false);
        
          return (
            <div>
              <h1>Terms & Conditions</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                delectus.
              </p>
              <div className="pb-3">
                <label htmlFor="agree">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="mr-1"
                  />
                  I accept the terms and conditions.
                </label>
              </div>
              <button disabled={!isChecked} className="btn">
                Submit
              </button>
            </div>
          );
        };

        export default TermsAndConditions;
    // tests/components/TermsAndConditions.test.tsx codes:
        import { render, screen } from "@testing-library/react";
        import TermsAndConditions from "../../src/components/TermsAndConditions";
        import userEvent from "@testing-library/user-event";
        
        describe("TermsAndConditions", () => {
          const renderComponent = () => {
            render(<TermsAndConditions />)
            return {
              heading: screen.getByRole("heading"),
              checkbox: screen.getByRole("checkbox"),
              button: screen.getByRole("button")
            }
          }
      
          it("should render with correct text and initial state", () => {
            const {heading, checkbox, button} = renderComponent()

            expect(heading).toHaveTextContent("Terms & Conditions");
            expect(checkbox).not.toBeChecked();
            expect(button).toBeDisabled();
          });
          // user intraction test
          // to simulate user intractions we have to use a different library called user event
          // back to the documentation of testing library and we have a section called user intractions, we have this companion library called user-event
          // we have to install this separatly to simulate user events just note that in react testing library we also have fire event a lot of people use this but its not the best way to simulate user events
          // because fire event as explained here is a lightweight wrapper around the browser's low level dispatch event API
          // so it doesn't simulate a real work senario and that is why we have the user event library the way this library dispatches events
          // is is similar to how users use our applications now to install this:
              // npm installl --save-dev @testing-library/user-event
          it('should enable the button when the checkbox is checked', async () => {
            const {checkbox, button} = renderComponent()
            const user = userEvent.setup()
            await user.click(checkbox)
            expect(button).toBeEnabled()
          })
        });
    // let me to show you a great technique for simplifying our tests, lets take a look at the tests we wrote for the TermsAndConditions.test.tsx:
        import {render, screen} from "@testing-library/react"
        import TermsAndConditions from "../../src/components/TermsAndConditions";
        import userEvent from "@testing-library/user-event";

        describe('TermsAndConditions', () => {
          it('should render with correct text and initial state', () => {
            render(< TermsAndConditions />)
            const heading = screen.getByRole("heading")
            expect(heading).toBeInTheDocument()
            expect(heading).toHaveTextContent("Terms And Conditions)
            const checkbox = screen.getByRole("checkbox")
            expect(checkbox).toBeInTheDocument()
            expect(checkbox)..nottoBeChecked()
            const button = screen.getByRole("button)
            expect(button).toBeInTheDocument()
            expect(button).toBeDisabled()
          })
          it('should enable the button when the checkbox is checked', async () => {
            render(< TermsAndConditions />)
            const checkbox = screen.getByRole("checkbox")
            const user = userEvent.setup()
            await user.click(checkbox)
            expect(screen.getByRole("button")).toBeEnabled()
          })
        })
      // so let me show you a better way to write these tests, back to our test suite and first define a helper function for rendering our componentand returning the common elements we want to query
      // so we can use the arrow function syntax or function decleration syntaxit doesn't matter, helper function is:
        const renderComponent = () => {
          render(< TermsAndConditions />)
          return {
              heading: screen.getByRole("heading"),
              checkbox: screen.getByRole("checkbox"),
              button: screen.getByRole("button")
            }
        }
      // so we have final codes as below:

          import { render, screen } from "@testing-library/react";
          import TermsAndConditions from "../../src/components/TermsAndConditions";
          import userEvent from "@testing-library/user-event";

          describe("TermsAndConditions", () => {
            const renderComponent = () => {
              render(<TermsAndConditions />)
              return {
                heading: screen.getByRole("heading"),
                checkbox: screen.getByRole("checkbox"),
                button: screen.getByRole("button")
              }
            }
          
            it("should render with correct text and initial state", () => {
              const {heading, checkbox, button} = renderComponent()

              expect(heading).toHaveTextContent("Terms & Conditions");
              expect(checkbox).not.toBeChecked();
              expect(button).toBeDisabled();
            });
            
            it('should enable the button when the checkbox is checked', async () => {
              const {checkbox, button} = renderComponent()
              const user = userEvent.setup()
              await user.click(checkbox)
              expect(button).toBeEnabled()
            })
          });
        `}
      />
    </div>
  );
};

export default TestingUserIntractions;
