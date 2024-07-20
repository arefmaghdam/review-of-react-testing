import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const RoutingTesting = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Routing testing in React applications using the React Testing Library includes checking the correctness of routing,
    // the rendering of appropriate components in different routes, as well as user interactions with routing links and buttons.
    // Here we explain how to do this in detail.

    // Routing testing steps:
    // Create routing components and routes
    // Writing tests to check paths and render components
    // Testing user interactions with navigation links and buttons
    // 1. Create routing components and routes:
    // Suppose we have a simple application that includes the main page (Home) and the page about us (About).
    
    // Create Home and About components:

        // Home.js
        import React from 'react';
        const Home = () => <h1>Home Page</h1>;
        export default Home;

        // About.js
        import React from 'react';
        const About = () => <h1>About Page</h1>;
        export default About;

    // Create main component with routing:

        // App.js
        import React from 'react';
        import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
        import Home from './Home';
        import About from './About';
        
        const App = () => {
          return (
            <Router>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </nav>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </Router>
          );
        };
        
        export default App;
    
    // 2. Writing tests to check paths and render components:
    // To write the tests, we use Jest and the React Testing Library to render the component and check routes.
    
    // Testing the rendering of components in different directions:

        // App.test.js
        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import { MemoryRouter, Route } from 'react-router-dom';
        import App from './App';
        import Home from './Home';
        import About from './About';
        
        test('renders Home component for / route', () => {
          render(
            <MemoryRouter initialEntries={['/']}>
              <App />
            </MemoryRouter>
          );
          expect(screen.getByText('Home Page')).toBeInTheDocument();
        });

        test('renders About component for /about route', () => {
          render(
            <MemoryRouter initialEntries={['/about']}>
              <App />
            </MemoryRouter>
          );
          expect(screen.getByText('About Page')).toBeInTheDocument();
        });
    
    // Description:
    // MemoryRouter: MemoryRouter is used to simulate routing in tests.
    // initialEntries: This property specifies the initial entries.
    // Here ['/'] is used to test the main path and ['/about'] is used to test the about us path.
    // 3. Testing user interactions with navigation links and buttons:
    // Test if the user can navigate between pages correctly.
    
    // Testing user interactions with links: 

        // App.test.js
        import React from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        import { MemoryRouter } from 'react-router-dom';
        import App from './App';
        
        test('navigates to About page when About link is clicked', () => {
          render(
            <MemoryRouter initialEntries={['/']}>
              <App />
            </MemoryRouter>
          );
        
          fireEvent.click(screen.getByText(/about/i));
          expect(screen.getByText('About Page')).toBeInTheDocument();
        });

        test('navigates to Home page when Home link is clicked', () => {
          render(
            <MemoryRouter initialEntries={['/about']}>
              <App />
            </MemoryRouter>
          );
        
          fireEvent.click(screen.getByText(/home/i));
          expect(screen.getByText('Home Page')).toBeInTheDocument();
        });
    
    // Description:
    // fireEvent.click: This function is used to simulate clicking on links.
    // screen.getByText: This function is used to find links and texts in the DOM
    // and check whether the corresponding page has been rendered or not.
        `}
      />
    </div>
  );
};

export default RoutingTesting;
