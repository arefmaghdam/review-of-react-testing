import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxToolkitFetching = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // In redux, if we wanted to use async actions, we would face a lot of headaches,
    // suppose we have a url that if we fetch it, we will receive a series of posts,
    // for this purpose in redux toolkit we can create a slice to We create the name postSlice.ts, postSlice.ts codes:
        import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

        interface Post {
            userId: number;
            id: number;
            title: string;
            body: string;
        }

        interface PostState {
            postList: Post[];
            fetchingPosts: boolean;
            errorMessage: string | null;
        }

        const initialState: PostState = {
            postList: [],
            fetchingPosts: false,
            errorMessage: null
        }


        export const fetchPosts = createAsyncThunk<Post[]>("posts/fetch",
        async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            return data
        })

        const postSlice = createSlice({
            name: "posts",
            initialState,
            extraReducers: {
                [fetchPosts.fulfilled]: (state, action: PayloadAction<Post[]>) => {
                    state.postList = action.payload
                    state.fetchingPosts = false
                }, 
                [fetchPosts.pending]: (state) => {
                    state.fetchingPosts = true
                },
                [fetchPosts.rejected]: (state) => {
                    state.fetchingPosts = false
                    state.errorMessage = "Something went wrong..."
                }
            }
        })

        export default postSlice.reducer

    // The only important thing about slice reducer is that when we have sync actions, like normal functions, we use reducers,
    // but when we have async actions, like data fetching, we use extraReducers.
    // Remember that everything we return in the createAsyncThunk function is received in the payload.
    // store.js codes:

        import {configureStore} from "@reduxjs/toolkit"

        import postReducer from "./postSlice"

        const store = configureStore({
            reducer: {
                posts: postReducer
            }
        })

        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch

        export default store

    // PostList.js codes:

        import { useEffect } from "react"
        import { useDispatch, useSelector } from "react-redux"
        import {fetchPosts} from "./postSlice"
        import { RootState, AppDispatch } from "./store"

        export default const PostList: React.FC = () => {

            const dispatch = useDispatch<AppDispatch>()
            const postList = useSelector(state: RootState => state.posts.postList)

            useEffect(() => {
                dispatch(fetchPosts())
            }, [])

            return (
                <div>
                    {postList.map(post => <div style={{margin: 20}} key={post.id} >{post.body}</div>)}
                </div>
            )
        }

    // App.js codes:

        import React from "react"
        import PostList from "./PostList"
        import { Provider } from "react-redux"
        import store from "./store"
            
        const App: React.FC = () => {
            return (
                <Provider store={store}>
                    <PostList />
                </Provider>
            )
        }

export default App

        `}
      />
    </div>
  );
};

export default ReduxToolkitFetching;
