import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AuthenticationTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Testing authentication using React Testing Library means that you test the user login and logout process as well as different access
    // based on user roles in your components. Here we explain how to do this in detail.

    // Authentication testing steps:
    // Creating a component for user login
    // Writing tests for the user login and logout process
    // Testing different access based on user roles
    // 1. Create a component for user login
    // Let's say we have a simple user login component that redirects the user to the dashboard page after successful login.

        // Login.js
        import React, { useState } from 'react';

        const Login = ({ onLogin }) => {
          const [username, setUsername] = useState('');
          const [password, setPassword] = useState('');
        
          const handleSubmit = (e) => {
            e.preventDefault();
            if (username === 'user' && password === 'password') {
              onLogin({ username });
            } else {
              alert('Invalid credentials');
            }
          };
      
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          );
        };

        export default Login;
    
    // 2. Writing tests for the user login and logout process:
    // To write the tests, we use Jest and the React Testing Library to render the component and interact with it.
    
    // Testing the user login process:

        // Login.test.js
        import React from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import Login from './Login';
        
        test('calls onLogin with the user data when credentials are correct', () => {
          const onLogin = jest.fn();
          render(<Login onLogin={onLogin} />);
        
          fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
          fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
          fireEvent.click(screen.getByText('Login'));
        
          expect(onLogin).toHaveBeenCalledWith({ username: 'user' });
        });

        test('shows alert when credentials are incorrect', () => {
          global.alert = jest.fn();
          render(<Login onLogin={() => {}} />);
        
          fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'wrong' } });
          fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrong' } });
          fireEvent.click(screen.getByText('Login'));
        
          expect(global.alert).toHaveBeenCalledWith('Invalid credentials');
        });
    
    // Description: 
    // fireEvent.change: This function is used to simulate changes in input fields.
    // fireEvent.click: This function is used to simulate a click on the login button.
    // expect(onLogin).toHaveBeenCalledWith: Checks that the onLogin function has been called with the correct user data.
    // global.alert: Used to simulate and check alert messages.
    // 3. Testing different access based on user roles
    // Suppose we have users with different roles and we want to test different access for them.
    
    // Creating components for user roles:

        // Dashboard.js
        import React from 'react';
        
        const Dashboard = ({ user }) => {
          return (
            <div>
              <h1>Dashboard</h1>
              {user.role === 'admin' && <button>Admin Panel</button>}
              {user.role === 'user' && <p>Welcome, user!</p>}
            </div>
          );
        };

        export default Dashboard;

    // Writing tests for user roles:

        // Dashboard.test.js
        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import Dashboard from './Dashboard';
        
        test('shows Admin Panel button for admin users', () => {
          render(<Dashboard user={{ role: 'admin' }} />);
        
          expect(screen.getByText('Admin Panel')).toBeInTheDocument();
        });

        test('shows welcome message for regular users', () => {
          render(<Dashboard user={{ role: 'user' }} />);
        
          expect(screen.getByText('Welcome, user!')).toBeInTheDocument();
          expect(screen.queryByText('Admin Panel')).not.toBeInTheDocument();
        });
    
    // Description
    // expect(screen.getByText('Admin Panel')).toBeInTheDocument(): Checks that the Admin Panel button is rendered for users with the admin role.
    // expect(screen.queryByText('Admin Panel')).not.toBeInTheDocument(): Checks that the Admin Panel button is not rendered for users with the user role.
        `}
      />
    </div>
  );
};

export default AuthenticationTesting;
