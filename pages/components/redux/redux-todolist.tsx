import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxTodoList = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // lets go to create a todolist application using redux instead of redux toolkit, here, we should to define actions, action creators, reducers and store manually.
    // actions.ts codes:

        import axios from 'axios';
        import { Dispatch } from 'redux';

        export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
        export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
        export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

        export const fetchTodosRequest = () => ({
            type: FETCH_TODOS_REQUEST,
        });

        export const fetchTodosSuccess = (todos: any) => ({
            type: FETCH_TODOS_SUCCESS,
            payload: todos,
        });

        export const fetchTodosFailure = (error: any) => ({
            type: FETCH_TODOS_FAILURE,
            payload: error,
        });

        export const fetchTodos = () => {
            return async (dispatch: Dispatch) => {
                dispatch(fetchTodosRequest());
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    dispatch(fetchTodosSuccess(response.data));
                } catch (error) {
                    dispatch(fetchTodosFailure('Failed to fetch todos'));
                }
            };
        };
    
    // reducers.ts codes:

        import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actions';

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

        const initialState: TodoState = {
            todos: [],
            loading: false,
            error: null,
        };

        const todoReducer = (state = initialState, action: any): TodoState => {
            switch (action.type) {
                case FETCH_TODOS_REQUEST:
                    return { ...state, loading: true, error: null };
                case FETCH_TODOS_SUCCESS:
                    return { ...state, loading: false, todos: action.payload };
                case FETCH_TODOS_FAILURE:
                    return { ...state, loading: false, error: action.payload };
                default:
                    return state;
            }
        };

        export default todoReducer;
    
    // store.ts codes:

        import { createStore, applyMiddleware } from 'redux';
        import thunk from 'redux-thunk';
        import todoReducer from './reducers';
        
        const store = createStore(todoReducer, applyMiddleware(thunk));
        
        export default store;

    // TodoList.tsx codes:

        import React, { useEffect } from 'react';
        import { useDispatch, useSelector } from 'react-redux';
        import { fetchTodos } from './actions';
        import { RootState } from './store';
        
        const TodoList: React.FC = () => {
            const dispatch = useDispatch();
            const { todos, loading, error } = useSelector((state: RootState) => state);
        
            useEffect(() => {
                dispatch(fetchTodos());
            }, [dispatch]);
        
            if (loading) {
                return <div>Loading...</div>;
            }
        
            if (error) {
                return <div>{error}</div>;
            }
        
            return (
                <ul>
                    {todos.map((todo: any) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            );
        };

        export default TodoList;
    
    // App.tsx codes:

        import React from 'react';
        import TodoList from './TodoList';
        import { Provider } from 'react-redux';
        import store from './store';
        
        const App: React.FC = () => {
            return (
                <Provider store={store}>
                    <TodoList />
                </Provider>
            );
        };

        export default App;
    
    // Description of using Redux without Redux Toolkit
    // 1. actions.ts
    // In this file, we defined actions and action creators.
    // fetchTodos is an async action creator that uses a thunk to dispatch multiple actions.
    // 2. reducers.ts
    // In this file, we defined the reducer to manage the state.
    // The reducer handles FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, and FETCH_TODOS_FAILURE states.
    // 3. store.ts
    // In this file, we created the store using createStore and applyMiddleware.
    // We added thunk as middleware to handle async actions.
    // 4. TodoList.tsx
    // In this component, we used useDispatch to dispatch actions and useSelector to access the state.
    // In useEffect, we dispatch the fetchTodos action so that the data is called when the component is loaded.
    // 5. App.tsx
    // In this file, we configured Provider with store to send Context Redux to all child components.
    // Comparing Redux with Redux Toolkit
    // Simplicity and readability: The Redux Toolkit makes using Redux simpler and more readable.
    // With Redux Toolkit, there is no need to manually define actions and reducers.
    // Setup and Configuration: The Redux Toolkit handles many complex setups and configurations automatically.
    // Reduce Duplicate Codes: Redux Toolkit removes a lot of duplicate code such as defining actions and reducers.
    // Using Redux without the Redux Toolkit requires more configuration and coding, but is useful for a deeper understanding of how Redux works.
    // Hopefully, these explanations will help you to better use Redux in your projects.  
        `}
      />
    </div>
  );
};

export default ReduxTodoList;
