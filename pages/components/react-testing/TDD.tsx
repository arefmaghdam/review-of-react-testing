import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TDD = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Test-Driven Development (TDD) is a software development approach in which tests are written before the actual code is written.
    // The goal of TDD is to ensure that every piece of code written works correctly and meets the specified requirements.

    // Key concepts of TDD:
    // What are TDD tests?
    
    // TDD tests are automated code that is written before the main code is implemented.
    // The purpose of these tests is to ensure that the written code meets the specified requirements and works correctly.
    // TDD cycle (Red-Green-Refactor):
    
    // Red: Writing a test that fails at first.
    // Green: Writing the minimum code necessary to pass the test.
    // Refactor: optimize code and remove repetitions without breaking tests.
    // TDD steps:
    // Step 1: Write the test (Red):
    // First, you write a test that describes what you expect from the code. This test will fail at first because there is no code yet to pass the test.
    
    // Example: writing a test
    
        // __tests__/sum.test.js
        import { sum } from '../sum';

        test('adds 1 + 2 to equal 3', () => {
          expect(sum(1, 2)).toBe(3);
        });

    // Step 2: Write the code (Green):
    // Write the minimum code required to pass the test.
    
    // Example: writing code:

    // sum.js
        export function sum(a, b) {
          return a + b;
        }

    // 3: Refactor:
    // Optimize code, remove duplication, and ensure that tests still pass.
    
    // Example: Refactor the code
    // In this example, there is no need to refactor because the code is simple and optimized. But if you had more complex code, you might need a refactor.
    
    // TDD cycle in projects:
    // Step 1: Write TDD tests:
    // First write your tests and make sure they all fail.
    
        // __tests__/ToDoList.test.js
        import React from 'react';
        import { render, screen, fireEvent } from '@testing-library/react';
        import '@testing-library/jest-dom/extend-expect';
        import ToDoList from '../ToDoList';
        
        test('adds a new task', () => {
          render(<ToDoList />);
          fireEvent.change(screen.getByPlaceholderText('Add a new task'), { target: { value: 'Learn TDD' } });
          fireEvent.click(screen.getByText('Add Task'));
          expect(screen.getByText('Learn TDD')).toBeInTheDocument();
        });

        test('completes a task', () => {
          render(<ToDoList />);
          fireEvent.change(screen.getByPlaceholderText('Add a new task'), { target: { value: 'Learn TDD' } });
          fireEvent.click(screen.getByText('Add Task'));
          fireEvent.click(screen.getByText('Learn TDD'));
          expect(screen.getByText('Learn TDD')).toHaveStyle('text-decoration: line-through');
        });

    // Step 2: Write the code to pass the tests:
    // Write the codes that are necessary to pass the tests.
    
    // Example: Writing code for ToDoList

        // ToDoList.js
        import React, { useState } from 'react';
        
        const ToDoList = () => {
          const [tasks, setTasks] = useState([]);
          const [newTask, setNewTask] = useState('');
        
          const addTask = () => {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
          };
      
          const toggleTaskCompletion = (index) => {
            const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
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
    
    // 3: Refactor the code:
    // Optimize the code and make sure the tests still pass.
    
    // Advantages of TDD:
    // High quality: The generated codes are of high quality due to extensive testing coverage.
    // Reduce bugs: By writing tests before code, many bugs are identified and fixed before implementation.
    // Better design: TDD forces developers to be more careful with their code design.
    // Challenges and important points: 
    // Time consuming: TDD can be time consuming, especially on large projects.
    // Learning curve: Learning and mastering TDD takes time and practice.
    // Continuous practice: TDD requires constant practice to help improve code quality and efficiency.
    // Conclusion:
    // TDD is an effective development approach to produce quality code and reduce bugs.
    // By using TDD, developers can improve their code step by step and ensure that it works correctly.
    // By following the Red-Green-Refactor cycle, you can produce high-quality, bug-free code.
    
        `}
      />
    </div>
  );
};

export default TDD;
