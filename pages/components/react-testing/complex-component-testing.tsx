import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ComplexComponentsTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Testing complex components in React requires special approaches, especially when the components use context, state or forms.
    // In this section, we will examine how to test these types of components.

    // Testing context components:
    // Using context in React is very useful for managing and sharing state between components.
    // To test components that use context, you must provide the context provider in the tests.
    
    // Example: testing context components

        import React, { createContext, useContext } from 'react';
        import { render, screen } from '@testing-library/react';
        
        const MyContext = createContext();

        const MyProvider = ({ children }) => {
          const value = 'Hello from context';
          return (
            <MyContext.Provider value={value}>
              {children}
            </MyContext.Provider>
          );
        };

        const MyComponent = () => {
          const value = useContext(MyContext);
          return <div>{value}</div>;
        };

        test('renders value from context', () => {
          render(
            <MyProvider>
              <MyComponent />
            </MyProvider>
          );
          expect(screen.getByText('Hello from context')).toBeInTheDocument();
        });

    // In this example, the MyComponent component uses the MyContext context. To test this component, we need to render it inside MyProvider to provide the context.

    // Testing components with state:
    // Testing components that use state usually involves simulating changes to state and checking for component re-rendering.
    
    // Example: testing components with state

        import React, { useState } from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        
        const Counter = () => {
          const [count, setCount] = useState(0);
          return (
            <div>
              <div>{count}</div>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
        };

        test('increments counter', () => {
          render(<Counter />);
          const button = screen.getByText('Increment');
          fireEvent.click(button);
          expect(screen.getByText('1')).toBeInTheDocument();
        });
    
    // Testing form components:
    // Testing components that include forms usually involves simulating user input and form submission.
    
    // Example: testing form components

        import React, { useState } from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        
        const LoginForm = ({ onSubmit }) => {
          const [username, setUsername] = useState('');
          const [password, setPassword] = useState('');
        
          const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit({ username, password });
          };
      
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit">Login</button>
            </form>
          );
        };

        test('submits login form', () => {
          const handleSubmit = jest.fn();
          render(<LoginForm onSubmit={handleSubmit} />);
        
          fireEvent.change(screen.getByPlaceholderText('Username'), {
            target: { value: 'testuser' },
          });
          fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: 'password' },
          });
          fireEvent.click(screen.getByText('Login'));

          expect(handleSubmit).toHaveBeenCalledWith({
            username: 'testuser',
            password: 'password',
          });
        });
    
    // In this example, the LoginForm component contains a login form.
    // Testing this component includes simulating user inputs (username and password) and submitting the form.
    //  Then we check that the onSubmit function is called with the correct values.
        `}
      />
    </div>
  );
};

export default ComplexComponentsTesting;
