import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const AddingCustomerSlice = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // the first thing that i'm going to do is i'm going to go to the features directory and create a brand new slice that called customerSlice.ts, 
    // remember each time we have a new aspect of our application we are going to have to create a slice for it, customerSlice.ts codes:

        import { createSlice, PayloadAction } from "@reduxjs/toolkit"

        interface CustomerState {
            value: Customer[]
        }

        interface AddFoodToCustomerPayload {
            food: string
            id: string
        }

        interface Customer {
            id: string
            name: string
            food: string[]
        }

        const initialState: CustomerState = {
            value: []
        }

        export const customerSlice = createSlice({
            name: "customers",
            initialState,
            reducers: {
                addCustomer: (state, action: PayloadAction<Customer>) => {
                    state.value.push(action.payload)
                },
                addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
                    state.value.forEach((customer => {
                        if(customer.id === action.payload.id) {
                            customer.food.push(action.payload.food)
                        }
                    }))
                }
            }
        })

        export const { addCustomer, addFoodToCustomer } = customerSlice.actions

        export default customerSlice.reducer

    // store.ts codes:

        import { configureStore } from "@reduxjs/toolkit"
        import reservationsReducer from "../features/reservationSlice"
        import customerReducer from "../features/customerSlice"

        export const store = configureStore({
            reducer: {
                reservations: reservationsReducer,
                customer: customerReducer
            }
        })
        export type RootState = ReturnType<typeof store.getState>
        export type AppDispatch = typeof store.dispatch

    // now we create a src/components/CustomerCard.tsx:

        import React from 'react'
        import {useState} from "react"
        import {useDispatch} from "react-redux"
        import {addFoodToCustomer} from "../features/customerSlice"

        interface CustomerCardType {
            id: string
            name: string
            food: string[]
        }
        
        export default function CustomerCard({id, name, food}: CustomerCardType) {

            const dispatch = useDispatch()
            const [customerFoodInput, setCustomerFoodInput] = useState("")

          return (
                  <div className="customer-food-card-container">
                    <p>{name}</p>
                    <div className="customer-foods-container">
                      <div className="customer-food">
                        {food.map(food => {
                            return <p>{food}</p>
                        })}
                      </div>
                      <div className="customer-food-input-container">
                        <input 
                            value={customerFoodInput}
                            onChange={(e) => setCustomerFoodInput(e.target.value)}
                        />
                        <button 
                            onClick={() => {
                                if(!customerFoodInput) return
                                dispatch(addFoodToCustomer({
                                    id,
                                    food: customerFoodInput
                                }))
                                setCustomerFoodInput("")
                            }}
                        >
                            Add
                        </button>
                      </div>
                    </div>
                  </div>
          )
        }
        

    // App.tsx codes:
        
        import React, { useState } from "react";
        import { useSelector, useDispatch } from "react-redux"
        import "./App.css";
        import ReservationCard from "./components/ReservationCard"
        import CustomerCard from "./components/CustomerCard"
        import { addReservation } from "./features/reservationSlice"

        function App() {

            const [reservationNameInput, setReservationNameInput] = useState("")

            const reservations = useSelector((state: RootState) => state.reservations.value)

            const customers = useSelector((state: RootState) => state.customer.value)

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
                  {customers.map(customer => {
                    return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
                  })}
                </div>
              </div>
            </div>
          );
        }

        export default App;
    // we need to uuid package to generate dynamic id, so we enter this command in terminal:
        npm install uuid @types/uuid
    // ReservationCard.tsx codes:

        import React from "react"
        import {useDispatch} from "react-redux"
        import {removeReservation} from "../features/reservationSlice"
        import {addCustomer} from "../features/customerSlice"
        import {v4 as uuid} from "uuid"

        interface ReservationCardTypes {
            name: string
            index: number
        }

        export defalt function ReservationCard({name, index}: ReservationCardTypes) {

            const dispatch = useDispatch()

            return (
                <div 
                    className="reservation-card-container" 
                    onClick={() => {
                        dispatch(removeReservation(index))
                        dispatch(addCustomer({
                            id: uuid(),
                            name,
                            food: []
                        }))
                    }}
                >
                    {name}
                </div>
            )
        }

        `}
      />
    </div>
  );
};

export default AddingCustomerSlice;
