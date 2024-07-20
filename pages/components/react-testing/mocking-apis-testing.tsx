import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const MockingAPIsTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Mocking APIs in React tests means that you simulate (mock) HTTP requests during tests so that you can check the behavior of your components when faced with different data.
    // This allows you to run your tests without depending on the network or external services.

    // Here we explain in detail how to do this using React Testing Library and Jest.
    
    // API Mock steps using Jest and React Testing Library:
    // Create a component that uses the API
    // Writing tests for the component by mocking the API
    // 1. Create a component that uses the API
    // Suppose we have a simple component that receives and displays data from an API

    // FetchData.js
        import React, { useEffect, useState } from 'react';

        const FetchData = () => {
          const [data, setData] = useState(null);
          const [error, setError] = useState(null);
        
          useEffect(() => {
            fetch('https://api.example.com/data')
              .then(response => response.json())
              .then(data => setData(data))
              .catch(error => setError(error));
          }, []);
      
          if (error) {
            return <div>Error: {error.message}</div>;
          }
      
          if (!data) {
            return <div>Loading...</div>;
          }
      
          return (
            <div>
              <h1>Data</h1>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          );
        };

        export default FetchData;
    
    // 2. Writing tests for the component by mocking the API:
    // To write tests, we use Jest to mock fetch and React Testing Library to render the component and interact with it.
    
    // Mock fetch:
    // In Jest, you can mock functions using jest.fn() or jest.mock(). In this example, we mock global.fetch so that the actual HTTP request is not sent to the server
    // and instead returns a simulated response.

    // FetchData.test.js
        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import FetchData from './FetchData';
        
        beforeEach(() => {
          global.fetch = jest.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve({ message: 'Hello, World!' }),
            })
          );
        });

        afterEach(() => {
          jest.resetAllMocks();
        });

        test('fetches and displays data', async () => {
          render(<FetchData />);
        
          await waitFor(() => expect(screen.getByText('Hello, World!')).toBeInTheDocument());
        
          expect(screen.getByText('Hello, World!')).toBeInTheDocument();
          expect(global.fetch).toHaveBeenCalledTimes(1);
        });
    
    // Description:
    // beforeEach: This function runs before each test and mocks global.fetch to return a simulated response
    // instead of sending the actual request.
    // afterEach: This function is executed after each test and resets all Mocks so that each test is executed independently.
    // waitFor: This function is from the React Testing Library and is used to wait until a specific change is made to the DOM.
    // Here, we wait for the simulated data to be rendered in the DOM.
    // Test different scenarios:
    // In addition to testing success scenarios, you can also test error scenarios.
    // For example, test whether the error message is displayed correctly.
        
    // FetchData.test.js 
        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import FetchData from './FetchData';
        
        beforeEach(() => {
          global.fetch = jest.fn(() =>
            Promise.reject(new Error('Failed to fetch'))
          );
        });

        afterEach(() => {
          jest.resetAllMocks();
        });

        test('displays error message on fetch failure', async () => {
          render(<FetchData />);
        
          await waitFor(() => expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument());
        
          expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
        });
    
    // Description:
    // Promise.reject: Here, we mock fetch to return an error to simulate the error scenario.
    // expect: We check if the error message is correctly rendered in the DOM.
        `}
      />
    </div>
  );
};

export default MockingAPIsTesting;
