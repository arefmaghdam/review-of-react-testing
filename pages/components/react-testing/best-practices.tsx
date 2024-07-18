import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const BestPractices = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // In this section, we will review the best practices for writing stable, readable, and maintainable tests in React.
    // Following these practices will help you write tests that are reliable and easy to maintain.

    // Writing stable tests:
    // Stable tests are tests that are not sensitive to unnecessary changes and rarely fail unless there are real changes in the behavior of the application.
    // To write stable tests, you can use the following methods:
    
    // Use role-based and text-based selectors: Instead of using CSS selectors or custom IDs, use role-based and text-based selectors.
    // This makes the tests less dependent on the DOM structure.

        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import MyComponent from './MyComponent';

        test('renders a button with the correct text', () => {
          render(<MyComponent />);
          expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        });

    // Avoid testing implementation details: Instead of testing internal implementation details of components, test their behavior and final output.

        
        test('displays the correct message when button is clicked', () => {
          render(<MyComponent />);
          const button = screen.getByRole('button', { name: /submit/i });
          fireEvent.click(button);
          expect(screen.getByText(/success/i)).toBeInTheDocument();
        });
    
    // Using waitFor for asynchronous tests: To test asynchronous code, use waitFor to wait for changes.

        test('loads and displays data', async () => {
            render(<MyComponent />);
            await waitFor(() => expect(screen.getByText(/loaded data/i)).toBeInTheDocument());
        });

    // Writing readable and maintainable tests:
    // The readability and maintainability of tests makes it easy for other team members to understand them and change them if needed.
    // To achieve this goal, use the following methods:
    
    // Meaningful naming of tests: Choose descriptive names for tests that clearly state the purpose of the test.

        test('displays error message when form submission fails', () => {
            // ...
        });
      
    // Use helper functions: To reduce code repetition and increase readability, use helper functions.

        const setup = () => {
             render(<MyComponent />);
            const button = screen.getByRole('button', { name: /submit/i });
            return { button };
        };
      
        test('displays success message when button is clicked', () => {
            const { button } = setup();
            fireEvent.click(button);
            expect(screen.getByText(/success/i)).toBeInTheDocument();
        });

    // Use describe to group related tests: Use describe to group related tests and increase organization.

        describe('MyComponent', () => {
           test('renders correctly', () => {
             render(<MyComponent />);
             expect(screen.getByText(/my component/i)).toBeInTheDocument();
           });
         
           test('displays success message when button is clicked', () => {
             render(<MyComponent />);
             const button = screen.getByRole('button', { name: /submit/i });
             fireEvent.click(button);
             expect(screen.getByText(/success/i)).toBeInTheDocument();
           });
         });

    // Writing small, independent tests: Break your tests into small, independent tests. This makes tests run faster and easier to debug.

        test('renders the button', () => {
            render(<MyComponent />);
            expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
          });

          test('displays success message when button is clicked', () => {
            render(<MyComponent />);
            const button = screen.getByRole('button', { name: /submit/i });
            fireEvent.click(button);
            expect(screen.getByText(/success/i)).toBeInTheDocument();
          });

    // Use Mocking Appropriately: Mock only necessary parts and avoid excessive mocking.
    // Excessive mocking can make tests dependent on implementation details and make them brittle.

        import { fetchData } from './api';
        jest.mock('./api');
          
        test('displays data fetched from API', async () => {
          fetchData.mockResolvedValue({ data: 'mocked data' });
          render(<MyComponent />);
          await waitFor(() => expect(screen.getByText('mocked data')).toBeInTheDocument());
        });
        `}
      />
    </div>
  );
};

export default BestPractices;
