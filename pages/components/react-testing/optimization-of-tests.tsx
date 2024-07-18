import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const OptimizationOfTests = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // In this section, we discuss the optimization of tests in the React Testing Library, which includes minimized rework using beforeEach and afterEach,
    // as well as accessibility testing.

    // Minimized rework: using beforeEach and afterEach
    // In tests where we have more than one test for a component, we can use beforeEach and afterEach to minimize redundant repetitions.
    // These two functions are executed before each test (beforeEach) and after each test (afterEach) and are used for initial settings and cleaning the test environment.
    
    // Example: Using beforeEach and afterEach

        import React from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        import Counter from './Counter';

        let originalConsoleError;
        beforeEach(() => {
          originalConsoleError = console.error;
          console.error = jest.fn();
        });

        afterEach(() => {
          console.error = originalConsoleError;
        });

        test('increments counter', () => {
          render(<Counter />);
          const button = screen.getByText('Increment');
          fireEvent.click(button);
          expect(screen.getByText('1')).toBeInTheDocument();
        });
    
    // In this example, beforeEach is used to handle console errors. By saving the original console.error and preventing it from being displayed during testing,
    // errors are generated via jest.fn() and reset afterEach after each test.

    // accessibility testing
    // Accessibility testing in web applications is important to ensure that users with disabilities such as blindness can easily use your site.
    // The React Testing Library provides tools for performing accessibility tests that can be used to check things like proper tags,
    // proper text for pages, correct alignment order, and more.
    
    // Example: Accessibility testing with React Testing Library

        import React from 'react';
        import { render } from '@testing-library/react';
        import App from './App';
        
        test('renders app with good accessibility', async () => {
          const { container } = render(<App />);
          await expect(container).toHaveAccessibleHTML();
        });
    
    // In this example, the jest-axe feature is used using toHaveAccessibleHTML. This possibility can be from the codes that have been optimized
        `}
      />
    </div>
  );
};

export default OptimizationOfTests;
