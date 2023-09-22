import {createSlice} from "@reduxjs/toolkit"

const intialState={
    cars:["Model S","Model 3", "Model X","Model Y"]
}

const carSlice=({
    name:"car",
    intialState,
    reducer:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer