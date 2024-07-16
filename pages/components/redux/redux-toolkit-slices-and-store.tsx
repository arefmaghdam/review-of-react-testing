import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxTollkitSlicesAndStore = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // lets go to set up redux toolkit inside of our react application, so we are going to have to create two separate slices, 
    // now in this initial setup we are only going to set up one slice and this is going to be for the reservations
    // and the next sections we are going to make that slice functional and work and then later on we are going to go ahead and 
    // create the other slice which is the customer food slice, so enter this commands in your terminal:
        npm install react-redux @reduxjs/toolkit
    // we need react-redux package to connect redux with react
    // now the first thing that we need to do is set up our store so remember how the state is dealt with inside of our application 
    // it is not located inside of any component, it is located outside of the component tree and so we have to set up that state somewhere outside of the component tree 
    // and to do that what we are going to do is we are going to go src directory and we are going to create an app directory and we are going to create a store.ts file
    // and so the first thing that we want to do is configure our stor, store.ts codes:
        import { configureStore } from "@reduxjs/toolkit"
        export const store = configureStore({
            reducer: {

            }
        })
        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch
    // inside of the reducers we are going to have all of our different slices
    // we have configured our store but now we need to connect it to our react application, so we are going to go to index.tsx file and we are going to import the Provider, index.tsx codes:
        import { Provider } from "react-redux"
        import { store } from "./app/store"

        <Provider store={store} >
            <App />
        </Provider>
    // so what we did here is by wrapping our whole application inside of this provider component and passing in the store
    // we are supplying our whole applicationwith this store, so any data inside of this store can be found inside of any component because we wrapped this provider with the App component
    // and so thats what the provider does so very simply now we have hooked up our redux application 
    // so now the next step is to create our very first slice and so to do that what we are going to be doing is go to our src directory and we are going to create a directory called features
    // and we are going to create the reservationSlice.ts, reservationSlice.ts codes:
        import { createSlice } from "@reduxjs/toolkit"

        const initialState = {
            value: []
        }

        export const reservationsSlice = createSlice({
            name: "reservations",
            initialState,
            reducers: {}
        })

        export default reservationsSlice.reducer
    // now we are going to go our store.ts file and add our reducer inside of our store:
        import { configureStore } from "@reduxjs/toolkit"
        import reservationsReducer from "../features/reservationSlice"

        export const store = configureStore({
            reducer: {
                reservations: reservationsReducer
            }
        })
        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch
        `}
      />
    </div>
  );
};

export default ReduxTollkitSlicesAndStore;
