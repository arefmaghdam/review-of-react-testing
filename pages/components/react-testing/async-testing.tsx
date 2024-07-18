import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AsyncTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Many times, React components load data or make changes to their state asynchronously.
    // To test such components, we need to wait for the changes and do our tests after them.
    // The React Testing Library provides tools to do this, one of the most important of which is waitFor.
    // The waitFor function from the React Testing Library is used to handle asynchronous changes to the DOM.
    // This function allows you to wait until a certain condition is met in the DOM.
    // If you use @testing-library/react, waitFor is available by default and does not need to be installed separately.
    // Example 1: Waiting for a text to be displayed after loading data:

        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        
        function AsyncComponent() {
          const [text, setText] = React.useState('');
        
          React.useEffect(() => {
            setTimeout(() => {
              setText('Hello World');
            }, 500);
          }, []);
        
          return <div>{text}</div>;
        }

        test('renders text after delay', async () => {
          render(<AsyncComponent />);
        
          await waitFor(() => expect(screen.getByText('Hello World')).toBeInTheDocument());
        });

    // Example 2: Waiting for a state change after an API request:
        
        import React from 'react';
        import { render, screen, waitFor } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
          
        function FetchComponent() {
          const [data, setData] = React.useState(null);
        
          React.useEffect(() => {
            async function fetchData() {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
              const result = await response.json();
              setData(result);
            }
            fetchData();
          }, []);
        
          if (!data) {
            return <div>Loading...</div>;
          }
        
          return <div>{data.title}</div>;
        }

        test('renders fetched data', async () => {
          render(<FetchComponent />);
        
          await waitFor(() => expect(screen.getByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i)).toBeInTheDocument());
        });
    
    // Other asynchronous testing tools:
    // In addition to waitFor, the React Testing Library provides several other tools for handling asynchronous tests:
    
    // findBy...: findBy methods return a promise that will be resolved when the desired element is found.

        test('renders async text with findBy', async () => {
          render(<AsyncComponent />);
          const asyncText = await screen.findByText('Hello World');
          expect(asyncText).toBeInTheDocument();
        });

    // waitForElementToBeRemoved: This function waits for an element to be removed from the DOM.

    import { waitForElementToBeRemoved } from '@testing-library/react';

        test('waits for element to be removed', async () => {
          render(<AsyncComponentWithRemoval />);
          const loadingElement = screen.getByText('Loading...');
          await waitForElementToBeRemoved(loadingElement);
          expect(screen.queryByText('Loading...')).toBeNull();
        });

    // 
    
    
        `}
      />
    </div>
  );
};

export default AsyncTesting;
