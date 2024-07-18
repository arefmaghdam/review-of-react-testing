import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const MockingAPIs = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Mocking or simulation of data and functions is one of the important parts of test writing.
    // This allows you to simulate external dependencies (such as API calls) and control their behavior.
    // Jest provides a powerful tool for mocking functions and API calls.

    // Mock functions and API calls:
    // Jest provides various facilities for mocking functions and API calls. You can do this in a few different ways:
    
    // Mock simple functions
    // Mock modules
    // Mock API calls
    // 1. Mock simple functions:
    // To mock a simple function, you can use jest.fn(). This method creates a mock function whose behavior you can control.

        import { render, screen } from '@testing-library/react';
        import userEvent from '@testing-library/user-event';
        
        function Button({ onClick }) {
          return <button onClick={onClick}>Click me</button>;
        }

        test('calls onClick when button is clicked', () => {
          const handleClick = jest.fn();
          render(<Button onClick={handleClick} />);
          userEvent.click(screen.getByText('Click me'));
          expect(handleClick).toHaveBeenCalledTimes(1);
        });

    // In this example, we create a handleClick mock function using jest.fn() and check if this function is called after the button is clicked.
    // 2. Mock modules:
    // To mock a module, you can use jest.mock(). This method allows you to mock the entire module.

    // فرض کنید ماژولی به نام api.js داریم که یک تابع fetchData دارد
    // src/api.js
        export const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          return response.json();
        };
        
        // src/FetchComponent.js
        import React, { useEffect, useState } from 'react';
        import { fetchData } from './api';

        function FetchComponent() {
          const [data, setData] = useState(null);
        
          useEffect(() => {
            fetchData().then(response => setData(response));
          }, []);
      
          if (!data) {
            return <div>Loading...</div>;
          }
      
          return <div>{data[0].title}</div>;
        }

        export default FetchComponent;

        // src/FetchComponent.test.js
        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        import FetchComponent from './FetchComponent';
        import * as api from './api';

        jest.mock('./api');

        test('renders fetched data', async () => {
          const mockData = [{ id: 1, title: 'Mocked Title' }];
          api.fetchData.mockResolvedValue(mockData);
        
          render(<FetchComponent />);
          await waitFor(() => expect(screen.getByText('Mocked Title')).toBeInTheDocument());
        });
    
    // In this example, we mock the api.js module and control the behavior of the fetchData function.
    // This function returns mocked data instead of the actual API call.
    // 3. Mock API calls:
    // To mock API calls, you can use jest.fn() and jest.mock() or use tools like fetch-mock.

        // src/api.js
        export const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          return response.json();
        };

        // src/FetchComponent.test.js
        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        import FetchComponent from './FetchComponent';

        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve([{ id: 1, title: 'Mocked Title' }]),
          })
        );
      
        test('renders fetched data', async () => {
          render(<FetchComponent />);
          await waitFor(() => expect(screen.getByText('Mocked Title')).toBeInTheDocument());
        });
    
    // In this example, we have mocked the fetch function to return the mocked data. Using global.fetch we can control the API call behavior.
        `}
      />
    </div>
  );
};

export default MockingAPIs;
