import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
    name:'joydeb',
   

}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value+=1;
        },
        decrement:(state,action)=>{
          state.value-=1;
        },
        changeByValue:(state, action)=>{
            console.log(action)
           state.value+=action.payload;
        },
        changeByName: (state, action)=>{
            state.name=action.payload;
        },
    },

})

//action creators are gernerated for each case reducer function

export const {increment, decrement, changeByValue, changeByName}=counterSlice.actions;
export default counterSlice.reducer