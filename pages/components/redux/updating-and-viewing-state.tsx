import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const UpdatingAndViewingState = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // in this section we are going to learn how we can update the state in our application, inside of reducer in reservationSlice.ts file, all we have to do is create the method that 
    // we want to use to update that particular state, reservationSlice.ts codes:
        import { createSlice, PayloadAction } from "@reduxjs/toolkit"

        interface ReservationState {
            value: string[]
        }

        const initialState: ReservationState = {
            value: []
        }

        export const reservationsSlice = createSlice({
            name: "reservations",
            initialState,
            reducers: {
                addReservation: (state, action: PayloadAction<string>) => {
                    state.value.push(action.payload)
                },
                removeReservation: (state, action: PayloadAction<number>) => {
                    state.value.splice(action.payload, 1)
                }
            }
        })

        export const { addReservation, removeReservation } = reservationsSlice.actions

        export default reservationsSlice.reducer

    // so now lets actually go to our App.tsx file and in div tag with reservation-container className, we want to render
    // reservation-card-container div dynamically, so the first thing that we want to do is to be able to actually see our state,
    // because right now in the component we cant really see our state, well there is actually a very handy method or hook that we can use
    // to do that, and that is called the useSelector hook, and inside of the useSelector hook we are going to have a callback
    // and we want to return state.reservations.value in useSelector
    // so now what we can do very simply is lets actually go in src directory and lets create a components directory and
    // inside of components directory create a reservation card component called ReservationCard.tsx
    // CReservationCard.tsx codes:

        import React from "react"
        import {useDispatch} from "react-redux"
        import {removeReservation} from "../features/reservationSlice"

        interface ReservationCardTypes {
            name: string
            index: number
        }

        export defalt function ReservationCard({name, index}: ReservationCardTypes) {

            const dispatch = useDispatch()

            return (
                <div className="reservation-card-container" onClick={() => {dispatch(removeReservation(index))}}>
                    {name}
                </div>
            )
        }

        // App.tsx codes:

        import React, { useState } from "react";
        import { useSelector, useDispatch } from "react-redux"
        import "./App.css";
        import ReservationCard from "./components/ReservationCard"
        import { addReservation } from "./features/reservationSlice"

        function App() {

            const [reservationNameInput, setReservationNameInput] = useState("")

            const reservations = useSelector((state: RootState) => state.reservations.value)

            const dispatch = useDispatch()

            const handleAddReservations = () => {
                if(!reservationNameInput) return
                dispatch(reservationSlice(reservationNameInput))
                setReservationNameInput("")
            }

          return (
            <div className="App">
              <div className="container">
                <div className="reservation-container">
                  <div>
                    <h5 className="reservation-header">Reservations</h5>
                    <div className="reservation-cards-container">
                      {reservations.map((name, index) => {
                            return <ReservationCard name={name} index={index} />
                      })}
                    </div>
                  </div>
                  <div className="reservation-input-container">
                    <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
                    <button onClick={handleAddReservations}>Add</button>
                  </div>
                </div>
                <div className="customer-food-container">
                  <div className="customer-food-card-container">
                    <p>Selena Gomez</p>
                    <div className="customer-foods-container">
                      <div className="customer-food"></div>
                      <div className="customer-food-input-container">
                        <input />
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        export default App;

    // now if we add a string to initialState in slice file and refresh the screen, we should to see that string in screen and this means out redux app is work correctly.
        `}
      />
    </div>
  );
};

export default UpdatingAndViewingState;
