import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const ReduxDataFlow = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // Suppose you went to a restaurant. First, it is empty on your table, and this is the same state in Redux, which is empty in the initial state.
    // Now the waiter comes and you order a cake, and ordering a cake in Redux is the action creator, which is a simple function that returns an object,
    // which the object is the action, which is the specification of your order, and its type is "ADD" and payload is "cake".
    // Now the waiter presents your order to the restaurant cook or chef, who is the food provider, which is the reducer in redux, which is a function inside which a switch is placed on action.types and based on the type,
    // it returns an immutable array that includes state And it is action.payload, which in our example conveys that the cake should reach our table when the cake is delivered to us by the waiter.
    // Now we want to check in redux toolkit, redux toolkit makes this process much easier.
    // In redux toolkit, we don't have many action creators and actions, and also we can update our own state mutable.
    // In redux toolkit, we use the concept of slice and make this process simpler, and redux toolkit does a lot of complexities behind the scenes.
    // That is, we have only one function in the redux toolkit that uses the createSlice function, which we call the whole function a slice.
    // slice is the way we can separate our states from each other.
    // Suppose that we have an application where we want to save the customers' food and also want to save the customer's reservations.
    // These are two separate parts of the state that we use two different slices to separate them.
        `}
      />
    </div>
  );
};

export default ReduxDataFlow;
