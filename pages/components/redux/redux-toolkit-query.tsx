import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxToolkitQuery = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // what is RTK Query? this is an additional package inside of redux toolkit library which allow us to simplify fetching of data
    // it simplifies fetching data, caching them, invalidation and reusing
    // what we can get from it? to write less code, because we are fetching the data making the sliding indicators and error messages again and againg
    // we are getting load in states where avoid and duplicate requests, we have out of the box optimistic updates and
    // we are getting caching out of the box
    // here i just want to convert our project with redux tool kit to usage of RTK Query
    // most importantly is that we dont need to install additional libraries
    // first lets go to create a simple todolist application using createAsyncThunk,
    // todoSlice.ts codes:
        import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

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
            error: null
        }

        export const fetchTodos = createAsyncThunk<Todo[]>("todos/fetch", async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            return response.json()
        })

        const todoSlice = createSlice({
            name: "todos",
            initialState,
            reducers: {},
            extraReducers: builder => {
                builder
                    .addCase(fetchTodos.pending, (state) => {
                        state.loading = true
                    })
                    .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
                        state.todos = action.payload
                        state.loading = false
                    })
                    .addCase(fetchTodos.rejected, (state) => {
                        state.loading = false
                        state.error = "Failed to fetch todos"
                    })
            }
        })

        export default todoSlice.reducer

    // store.ts codes:

        import { configureStore } from "@reduxjs/toolkit"
        import todoReducer from "./todoSlice"
        
        const store = configureStore({
            reducer: {
                todos: todoReducer
            }
        })

        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch

        export default store
    
    // TodoList.tsx codes:

        import React, { useEffect } from "react"
        import { useDispatch, useSelector } from "react-redux"
        import { fetchTodos } from "./todoSlice"
        import { RootState, AppDispatch } from "./store"
        
        const TodoList: React.FC = () => {
            const dispatch = useDispatch<AppDispatch>()
            const todos = useSelector((state: RootState) => state.todos.todos)
            const loading = useSelector((state: RootState) => state.todos.loading)
        
            useEffect(() => {
                dispatch(fetchTodos())
            }, [dispatch])
        
            if (loading) {
                return <div>Loading...</div>
            }
        
            return (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )
        }

        export default TodoList
    
    // App.tsx codes:

        import React from "react"
        import TodoList from "./TodoList"
        import { Provider } from "react-redux"
        import store from "./store"
        
        const App: React.FC = () => {
            return (
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
        }
        
        export default App

    // first we use createAsyncThunk for creating async actions, these actions have 3 steps of fulfilled, pending and rejected automaticly.
    // in todoSlice.ts we use extraReducers for async actions instead of reducers, reducers is for sync actions.
    // in TodoList.tsx we use useEffect for calling fetchTodos action when the component is loading and we use useSelector for accessing to state.
    // now lets go to create the same application using TRK Query:
    // apiSlice.ts code:

        import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

        interface Todo {
            id: number;
            title: string;
            completed: boolean;
        }

        export const apiSlice = createApi({
            reducerPath: "api",
            baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
            endpoints: (builder) => ({
                fetchTodos: builder.query<Todo[], void>({
                    query: () => "/todos"
                })
            })
        })

        export const { useFetchTodosQuery } = apiSlice

    // store.ts codes:

        import { configureStore } from "@reduxjs/toolkit"
        import { apiSlice } from "./apiSlice"
        
        const store = configureStore({
            reducer: {
                [apiSlice.reducerPath]: apiSlice.reducer
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(apiSlice.middleware)
        })

        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch

        export default store
    
    // TodoList.tsx codes:

        import React from "react"
        import { useFetchTodosQuery } from "./apiSlice"
        
        const TodoList: React.FC = () => {
            const { data: todos, error, isLoading } = useFetchTodosQuery()
        
            if (isLoading) {
                return <div>Loading...</div>
            }
        
            if (error) {
                return <div>Failed to fetch todos</div>
            }
        
            return (
                <ul>
                    {todos && todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )
        }

        export default TodoList
    
    // App.tsx codes:

        import React from "react"
        import TodoList from "./TodoList"
        import { Provider } from "react-redux"
        import store from "./store"
        
        const App: React.FC = () => {
            return (
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
        }
        
        export default App
    
        // in apiSlice.ts we use from createApi and fetchBaseQuery for defenition of API
        // fetchTodos is defined as a query which we use useFetchTodosQuery in components
        // also we add apiSlice.middleware in store.ts too
        // in TodoList.tsx we use useFetchTodosQuery for calling datas which manage the states of error, isLoadong and data automaticly.
        // createAsyncThunk vs RTK Query:
        // 1 Ease of use: RTK Query makes managing API requests and related statuses much simpler. You don't need to define loading, error and data states manually.
        // 2 Settings and configuration: RTK Query requires more configuration, such as adding middleware and reducer to the store. But once configured, it's much easier to use.
        // 3 More features: RTK Query has more features such as caching, polling, and refetching that make data management more efficient.
        // 4 Managing states: In createAsyncThunk, you have to manually manage states, while RTK Query does it automatically.
        // All in all, RTK Query is very convenient and efficient for projects that need to handle API requests. I hope this explanation will help you to use RTK Query better.
        `}
      />
    </div>
  );
};

export default ReduxToolkitQuery;
