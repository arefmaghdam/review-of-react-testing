import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReactContextAPI = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // lets go to create a todolist application using context api instead of redux toolkit, in this way, we use react context api and useReducer and useContext for state management
    // TodoContext.tsx codes:

        import React, { createContext, useReducer, ReactNode, useContext } from 'react';

        interface Todo {
            id: number;
            title: string;
            completed: boolean;
        }

        interface TodoState {
            todos: Todo[];
            loading: boolean;
            error: string | null;
        }

        type Action =
            | { type: 'FETCH_TODOS_REQUEST' }
            | { type: 'FETCH_TODOS_SUCCESS'; payload: Todo[] }
            | { type: 'FETCH_TODOS_FAILURE'; payload: string };

        const initialState: TodoState = {
            todos: [],
            loading: false,
            error: null,
        };

        const TodoContext = createContext<{
            state: TodoState;
            dispatch: React.Dispatch<Action>;
        } | undefined>(undefined);

        const todoReducer = (state: TodoState, action: Action): TodoState => {
            switch (action.type) {
                case 'FETCH_TODOS_REQUEST':
                    return { ...state, loading: true, error: null };
                case 'FETCH_TODOS_SUCCESS':
                    return { ...state, loading: false, todos: action.payload };
                case 'FETCH_TODOS_FAILURE':
                    return { ...state, loading: false, error: action.payload };
                default:
                    return state;
            }
        };

        export const TodoProvider = ({ children }: { children: ReactNode }) => {
            const [state, dispatch] = useReducer(todoReducer, initialState);
        
            return (
                <TodoContext.Provider value={{ state, dispatch }}>
                    {children}
                </TodoContext.Provider>
            );
        };

        export const useTodoContext = () => {
            const context = useContext(TodoContext);
            if (!context) {
                throw new Error('useTodoContext must be used within a TodoProvider');
            }
            return context;
        };

    // TodoList.tsx codes:

        import React, { useEffect } from 'react';
        import axios from 'axios';
        import { useTodoContext } from './TodoContext';
        
        const TodoList: React.FC = () => {
            const { state, dispatch } = useTodoContext();
            const { todos, loading, error } = state;
        
            useEffect(() => {
                const fetchTodos = async () => {
                    dispatch({ type: 'FETCH_TODOS_REQUEST' });
                    try {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: response.data });
                    } catch (error) {
                        dispatch({ type: 'FETCH_TODOS_FAILURE', payload: 'Failed to fetch todos' });
                    }
                };
            
                fetchTodos();
            }, [dispatch]);
        
            if (loading) {
                return <div>Loading...</div>;
            }
        
            if (error) {
                return <div>{error}</div>;
            }
        
            return (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            );
        };

        export default TodoList;
    
    // App.tsx codes:

        import React from 'react';
        import TodoList from './TodoList';
        import { TodoProvider } from './TodoContext';
        
        const App: React.FC = () => {
            return (
                <TodoProvider>
                    <TodoList />
                </TodoProvider>
            );
        };

        export default App;

    // Description of using Context API and useReducer
    // Create Context and Reducer:
    
    // TodoContext.tsx contains Context and Reducer definitions. TodoProvider handles state using useReducer and passes Context to child components.
    // todoReducer handles various data request states (FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE).
    // Using Context in the component:
    
    // In TodoList.tsx, we use useTodoContext to access statuses and dispatch.
    // In useEffect, we create an async function to request data from the API and call dispatches to handle states.
    // We handle loading and error states and display data if available.
    // Configure App.tsx:
    
    // App.tsx contains a TodoProvider that contains all the child components and sends the Context to them.

    // Advantages of using Context API and useReducer
    // Ease of use: Context API and useReducer is a simple and straightforward way to manage states in small to medium applications.
    // No additional configuration required: No additional configuration required such as the Redux Toolkit.
    // Suitable for small applications: It is very suitable for applications that do not need to handle complex situations.
    // I hope these explanations help you to better use Context API and useReducer in your projects.
    
        `}
      />
    </div>
  );
};

export default ReactContextAPI;
