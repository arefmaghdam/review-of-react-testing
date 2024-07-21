import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const BDD = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Behavior-Driven Development (BDD) is a software development approach that focuses on the interactions between users and systems
    // and helps development teams develop their software by writing tests in natural language (that is understood by all team members).
    // In BDD, tests are written as scenarios that describe the behavior of the system.

    // Key concepts of BDD:
    // What are BDD tests?
    
    // BDD tests are human-readable descriptions of system behavior written as Gherkin scenarios.
    // The goal of BDD is to focus on the requirements and expected behavior of the system.
    // Gherkin Language:
    
    // A structured and readable language for writing BDD tests.
    // It uses keywords like Feature, Scenario, Given, When, Then, And, But.
    // Steps to write and run BDD tests:
    // Step 1: Install and run the necessary tools:
    // Cucumber.js: A popular BDD tool for JavaScript.
    // jest-cucumber: A Jest and Cucumber integration tool.
    // Install Cucumber.js
    
        npm install --save-dev @cucumber/cucumber

    // Install jest-cucumber:

        npm install --save-dev jest-cucumber

    // Step 2: Write BDD tests:
    // Write BDD tests in .feature files using the Gherkin language.
    
    // An example of a Feature file

        # src/features/todolist.feature

        Feature: ToDo List Management

          Scenario: Adding a new task
            Given I have an empty todo list
            When I add a new task "Learn BDD"
            Then I should see the task "Learn BDD" in the todo list

          Scenario: Completing a task
            Given I have a todo list with a task "Learn BDD"
            When I mark the task "Learn BDD" as completed
            Then I should see the task "Learn BDD" marked as completed
    
    // Step 3: Write Step Definitions:
    // Defining test steps in JavaScript files.
    
    // Example Step Definitions

        // src/steps/todolistSteps.js

        import { defineFeature, loadFeature } from 'jest-cucumber';
        import { render, screen, fireEvent } from '@testing-library/react';
        import React from 'react';
        import ToDoList from '../ToDoList';

        const feature = loadFeature('./src/features/todolist.feature');

        defineFeature(feature, test => {
          test('Adding a new task', ({ given, when, then }) => {
            given('I have an empty todo list', () => {
              render(<ToDoList />);
            });
        
            when(/^I add a new task "(.*)"$/, task => {
              fireEvent.change(screen.getByPlaceholderText('Add a new task'), { target: { value: task } });
              fireEvent.click(screen.getByText('Add Task'));
            });
        
            then(/^I should see the task "(.*)" in the todo list$/, task => {
              expect(screen.getByText(task)).toBeInTheDocument();
            });
          });
      
          test('Completing a task', ({ given, when, then }) => {
            given('I have a todo list with a task "Learn BDD"', () => {
              render(<ToDoList />);
              fireEvent.change(screen.getByPlaceholderText('Add a new task'), { target: { value: 'Learn BDD' } });
              fireEvent.click(screen.getByText('Add Task'));
            });
        
            when(/^I mark the task "(.*)" as completed$/, task => {
              fireEvent.click(screen.getByText(task));
            });
        
            then(/^I should see the task "(.*)" marked as completed$/, task => {
              expect(screen.getByText(task)).toHaveStyle('text-decoration: line-through');
            });
          });
        });
    
    // Step 4: Run BDD tests:
    // Make sure Jest is properly configured to detect and run BDD test files.
    
    // Running tests

        npm test

    // Benefits of BDD:
    // More readability: BDD tests are written in natural language that is understandable to all team members (developers, testers, product owners).
    // Better collaboration: By focusing on system behavior and user requirements, team members can collaborate more easily.
    // Live documentation: BDD tests act as live project documentation that is always up-to-date and reliable.
    // important points:
    // Team Integration: BDD requires close cooperation between team members. Everyone should contribute to writing tests and defining scenarios.
    // Small and manageable tests: BDD tests should be small and manageable so that they are easy to understand and maintain.
    // Regular refactoring: Codes and tests should be refactored regularly to maintain their quality and readability.
    // Conclusion:
    // BDD is a software development approach that helps teams produce high-quality, readable software by focusing on real-world requirements
    // and system behavior. Using tools like Cucumber.js and jest-cucumber, you can easily write and run your own BDD tests and reap the benefits of this approach.
        `}
      />
    </div>
  );
};

export default BDD;
