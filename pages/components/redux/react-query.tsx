import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReactQuery = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // lets go to create a todolist application using react query, first we should to install this packages:

        npm install react-query
        npm install axios

    // TodoList.tsx codes:

        import React from "react"
        import { useQuery } from "react-query"
        import axios from "axios"

        interface Todo {
            id: number;
            title: string;
            completed: boolean;
        }

        const fetchTodos = async (): Promise<Todo[]> => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            return response.data
        }

        const TodoList: React.FC = () => {
            const { data: todos, error, isLoading } = useQuery<Todo[], Error>('todos', fetchTodos)
        
            if (isLoading) {
                return <div>Loading...</div>
            }
        
            if (error) {
                return <div>Failed to fetch todos: {error.message}</div>
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
        import { QueryClient, QueryClientProvider } from "react-query"
        
        const queryClient = new QueryClient()
        
        const App: React.FC = () => {
            return (
                <QueryClientProvider client={queryClient}>
                    <TodoList />
                </QueryClientProvider>
            )
        }

        export default App
    
    // Description of using React Query:
    // 1. Install required packages: First, we installed react-query and axios. Axios is used 
    // to send HTTP requests and react-query is used to handle the state of data requests.
    // 2. Definition of fetchTodos function: In the TodoList.tsx file, we defined a function called fetchTodos that uses axios to get the data.
    // This function is defined as async and returns an array of tasks (Todo[]).
    // 3. Using useQuery: We used the useQuery hook in the TodoList component. useQuery has three main parameters:
    // A unique key (todos) used to identify this query.
    // The fetch function that gets the data (fetchTodos).
    // Optional settings to control query behavior.
    // useQuery automatically handles the isLoading, error, and data states.
    // 4. Management of application statuses: In TodoList, if isLoading is true, a "Loading..." message will be displayed.
    // If there is an error, an error message will be displayed.
    // Finally, if the data (todos) is available, the list of tasks is displayed.
    // 5. Configure QueryClientProvider: In the App.tsx file, we created a QueryClient and passed it as a prop to the QueryClientProvider.
    // QueryClientProvider must be placed at the top level of the application so that all child components have access to react-query.
    // Comparison of createAsyncThunk and RTK Query with React Query:
    // Ease of use: React Query is easy to use and automatically handles statuses, similar to RTK Query.
    // Setup and configuration: RTK Query requires more configuration in the Redux store, while React Query only requires QueryClientProvider.
    // More features: Both RTK Query and React Query provide advanced features such as caching, polling, and refetching.
    // State management: Both tools handle state management automatically, but React Query doesn't need to create a slice or reducer.
    // React Query is especially suitable for projects that don't require Redux and can be set up quickly.
    // RTK Query is a good choice for projects that use Redux and want to manage data management and API requests in a single place.
        `}
      />
    </div>
  );
};

export default ReactQuery;
