import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const Vitest = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Vitest is a modern, fast and lightweight testing framework for JavaScript and TypeScript, designed with a focus on Vite-based projects.
    //  In this guide, we comprehensively cover all steps of installing, configuring, writing tests, and best practices for using Vitest.
    // Table of Contents:
    // Installation
    // configuration
    // Writing tests
    // Running tests
    // Matchers
    // Mock up
    // Using Snapshots
    // Asynchronous tests
    // reporting
    // Integration with CI/CD
    // Best practices
    // Complete reference of Matchers and Assertions
    // 1. Installation and commissioning
    // First you need to add Vitest to your project. If you use Vite, installation and configuration will be very simple.
    
    // Installing Vitest:

        npm install vitest --save-dev

    // Installing the Vite plugin for Vue projects:

        npm install @vitejs/plugin-vue --save-dev

    // 2. Configuration:
    // To configure Vitest, you need to edit the vite.config.js file. In this file, we add Vitest related configurations.
    
    // Configure Vite:

        import { defineConfig } from 'vite'
        import vue from '@vitejs/plugin-vue'
        import { configDefaults } from 'vitest/config'

        export default defineConfig({
          plugins: [vue()],
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './test/setup.js',
            exclude: [...configDefaults.exclude, 'e2e/*'],
          },
        })
    
    // 3. Writing tests:
    // Vitest supports Jest-like syntax for writing tests. In this section, we see examples of unit, component, and integration tests.
    
    // Example unit test:

        import { expect, test } from 'vitest'

        test('sum of two numbers', () => {
          const sum = (a, b) => a + b
          expect(sum(1, 2)).toBe(3)
        })
    
    // Component test example (React):

        import { render } from '@testing-library/react'
        import { describe, it, expect } from 'vitest'
        import MyComponent from './MyComponent'
        
        describe('MyComponent', () => {
          it('renders correctly', () => {
            const { getByText } = render(<MyComponent />)
            expect(getByText('Hello, world!')).toBeInTheDocument()
          })
        })

    // 4. Running tests:
    // Use the following command to run the tests:

        npx vitest

    // Or to run in watch mode:

        npx vitest --watch

    // 5. Matchers and Assertions:
    // Matchers and Assertions are tools used to check code outputs. Vitest uses matchers and assertions similar to Jest.
    
    // .Common Matchers:
    // .toBe(value): checks that the output value is the same as the expected value.
    // .toEqual(value): checks that the output value is the same as the expected value (in depth).
    // .toBeTruthy(): checks that the output value is a truthy value.
    // .toBeFalsy(): checks that the output value is a falsy value.
    // .toContain(item): checks that the array or string contains the desired value.
    // .toHaveLength(number): Checks that the array or string has a specified length.
    // .toMatch(regex|string): Checks whether the string matches a regular expression or a specified string.
    // .toBeDefined(): Checks that the output value is defined.
    // .toBeUndefined(): Checks that the output value is undefined.
    // .toBeNull(): checks that the output value is null.
    // .toBeNaN(): checks that the output value is NaN.
    // .toBeGreaterThan(number): Checks that the output value is greater than a specified value.
    // .toBeGreaterThanOrEqual(number): Checks whether the output value is greater than or equal to a specified value.
    // .toBeLessThan(number): checks that the output value is less than a specified value.
    // .toBeLessThanOrEqual(number): Checks whether the output value is less than or equal to a specified value.
    // .toThrow(error): checks that the desired function throws an error.
    // Example:

        import { expect, test } from 'vitest'

        test('matchers example', () => {
          const data = { name: 'John', age: 30 }
          expect(data).toEqual({ name: 'John', age: 30 })
          expect(data.name).toBe('John')
          expect(data.age).toBeGreaterThan(20)
        })
    
    // 6. Mock:
    // Vitest has powerful features for mocking functions and modules. This section shows you how to use these features.
    
    // Mock functions:

        import { vi, test, expect } from 'vitest'

        test('mock function', () => {
          const mockFn = vi.fn()
          mockFn()
          expect(mockFn).toHaveBeenCalled()
        })

    // Mock modules:

        vi.mock('./myModule', () => ({
            myFunction: vi.fn(() => 'mocked result'),
        }))
      
    // 7. Using Snapshots:
    // Vitest also provides snapshot testing. Snapshots allow you to save the output of components and compare them with future versions.
    
    // Sample snapshot test:

    import { expect, test } from 'vitest'

        test('snapshot test', () => {
          const obj = { foo: 'bar' }
          expect(obj).toMatchSnapshot()
        })
    
    // 8. Asynchronous tests:
    // Asynchronous tests can be written using async/await or callback functions. This section shows you how to handle asynchronous tests.
    
    // Asynchronous testing:

        import { expect, test } from 'vitest'
        
        test('async test', async () => {
          const fetchData = () => Promise.resolve('data')
          const data = await fetchData()
          expect(data).toBe('data')
        })
    
    // 9. Reporting:
    // Vitest provides different types of reports for tests. You can generate reports in different formats like junit or json.
    
    // Configure reports:

        test: {
            reporters: 'verbose', // یا 'junit'، 'json' و ...
        }
    
    // 10. Integration with CI/CD:
    // To integrate Vitest with CI/CD tools like GitHub Actions or GitLab CI, you can use the npx vitest command in your CI scripts.
    
    // Example GitHub Actions configuration file:

        name: CI

        on: [push]
        
        jobs:
          test:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v2
            - name: Setup Node.js
              uses: actions/setup-node@v2
              with:
                node-version: '16'
            - run: npm install
            - run: npm test
        
    // 11. Best practices:
    // 1. Writing small and focused tests
    // Tests should be small and focused on a specific task. This helps identify errors faster.
    // 2. Use Mocks and Stubs carefully
    // Use Mocks and Stubs only when needed. Overuse can make tests unreliable.
    // 3. Maintenance of tests
    // Regularly review and update tests to keep up with code changes.
    // 4. Documenting tests
    // Tests should be well documented so that other developers can easily understand them.
    // 5. Separation of tests
    // Separate tests logically by type or function. For example, keep unit tests, integration tests, and end-to-end tests in separate folders.
    // 6. Atomic tests
    // Each test should examine only one feature or behavior. This helps to reduce the complexity and increase the maintainability of the tests.
    // 7. Using linting and formatting tools
    // Use tools like ESLint and Prettier to make your tests code readable and standardized.
    // 12. Complete reference of Matchers and Assertions (continued):
    // Common Matchers (continued):
    // .toContain(item): checks that the array or string contains the desired value.
    // .toHaveLength(number): Checks that the array or string has a specified length.
    // .toMatch(regex|string): Checks whether the string matches a regular expression or a specified string.
    // .toBeDefined(): Checks that the output value is defined.
    // .toBeUndefined(): Checks that the output value is undefined.
    // .toBeNull(): checks that the output value is null.
    // .toBeNaN(): checks that the output value is NaN.
    // .toBeGreaterThan(number): Checks that the output value is greater than a specified value.
    // .toBeGreaterThanOrEqual(number): Checks whether the output value is greater than or equal to a specified value.
    // .toBeLessThan(number): checks that the output value is less than a specified value.
    // .toBeLessThanOrEqual(number): Checks whether the output value is less than or equal to a specified value.
    // .toThrow(error): checks that the desired function throws an error.
    // .toHaveBeenCalled(): Checks that the desired function has been called.
    // .toHaveBeenCalledTimes(number): checks that the desired function has been called a specified number of times.
    // .toHaveBeenCalledWith(...args): Checks that the desired function has been called with specified arguments.
    // Assertions:
    // Assertions are Matchers that are used to check different situations in tests. In fact, when you use a Matcher like toBe or toEqual, you are using Assertions.
    
    // Example Assertions:

        import { expect, test } from 'vitest'

        test('assertions example', () => {
          const data = { name: 'John', age: 30 }
          expect(data).toEqual({ name: 'John', age: 30 })
          expect(data.name).toBe('John')
          expect(data.age).toBeGreaterThan(20)
          expect(data.age).toBeLessThanOrEqual(30)
          expect(data).toHaveProperty('name', 'John')
          expect(() => { throw new Error('error') }).toThrow('error')
        })

    // Conclusion:
    // Vitest is a powerful and fast testing tool that allows developers to easily write and run their own tests.
    // With this guide, you can use Vitest to write unit, component, and integration tests, as well as learn the best practices
    // and tools you need to maintain and improve the quality of your code. Use this tool to make your codes better and more stable.
    
        `}
      />
    </div>
  );
};

export default Vitest;
