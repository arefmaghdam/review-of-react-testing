import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TDDAndBDDFusion = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // To start a simple ToDoList program using BDD (Behavior-Driven Development) and TDD (Test-Driven Development), we proceed as follows:

    // levels:
    // Setting up the project environment
    // Writing BDD tests using Cucumber and React Testing Library and TDD methodology
    // running tests and failing tests
    // Writing minimum program codes based on scenarios and tests
    // running tests again and passing tests
    // refactoring tests and codes if it is necessary
    // running tests again and passing tests after refactoring
    Step 1: Setting up the project environment
    First, create a new React project. We use Create React App for this.

        npx create-react-app todolist
        cd todolist

    // Then install the required libraries.

        npm install @testing-library/react @testing-library/jest-dom jest-cucumber

    // Step 2: Write BDD tests using Cucumber:
    // For this, we first create feature and step definition files.
    
    // Creating the Feature file:
    // In the src path, create a folder called features and create the todolist.feature file in it.

        # src/features/todolist.feature

        Feature: ToDo List

          Scenario: Adding a new task
            Given I have an empty todo list
            When I add a new task "Learn BDD"
            Then I should see the task "Learn BDD" in the todo list

          Scenario: Completing a task
            Given I have a todo list with a task "Learn BDD"
            When I mark the task "Learn BDD" as completed
            Then I should see the task "Learn BDD" marked as completed

    // Create Step Definition file:
    // In the src path, create a folder called steps and create the todolistSteps.js file in it.

        // src/steps/todolistSteps.js

        import { defineFeature, loadFeature } from 'jest-cucumber';
        import { render, screen, fireEvent } from '@testing-library/react';
        import React from 'react';
        import ToDoList from '../ToDoList';

        const feature = loadFeature('./src/features/todolist.feature');

        defineFeature(feature, test => {
          let getByText;
          let getByPlaceholderText;
        
          test('Adding a new task', ({ given, when, then }) => {
            given('I have an empty todo list', () => {
              const { getByText, getByPlaceholderText } = render(<ToDoList />);
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
              const { getByText, getByPlaceholderText } = render(<ToDoList />);
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
    
    // step 3: run tests and see failing tests:

        npm test

    // step 4: Write program codes based on tests:
    // Now it's time to write the program codes. Create the ToDoList.js file.

        // src/ToDoList.js

        import React, { useState } from 'react';
        
        const ToDoList = () => {
          const [tasks, setTasks] = useState([]);
          const [newTask, setNewTask] = useState('');
        
          const addTask = () => {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
          };
      
          const toggleTaskCompletion = (index) => {
            const updatedTasks = tasks.map((task, i) =>
              i === index ? { ...task, completed: !task.completed } : task
            );
            setTasks(updatedTasks);
          };
      
          return (
            <div>
              <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={addTask}>Add Task</button>
              <ul>
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    onClick={() => toggleTaskCompletion(index)}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  >
                    {task.text}
                  </li>
                ))}
              </ul>
            </div>
          );
        };

        export default ToDoList;

    // step 5: run tests again and see passing tests

        npm test

    // step 6: Refactoring the codes if needed
    // After the tests pass, you can refactor your code to improve readability and maintainability. Make sure the tests still pass after each change.
    // step 7: run tests again and see passing tests after refactoring

        npm test

    // 
    
        `}
      />
    </div>
  );
};

export default TDDAndBDDFusion;
