import { createSlice } from '@reduxjs/toolkit'
import {getdetails, postDetails} from './asyncThunck'


const initialState = {
    employeeDetails:[],
   loading:false,
   error:null,
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        //get details 
        builder.addCase(getdetails.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
    
        builder.addCase(getdetails.fulfilled, (state, action)=>{
            state.employeeDetails = action.payload;
            state.loading = false;
        })
        builder.addCase(getdetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        //post details on server
        builder.addCase(postDetails.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
    
        builder.addCase(postDetails.fulfilled, (state, action)=>{
           
            state.employeeDetails = action.payload;
            state.loading = false;
        })
    
        builder.addCase(postDetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    


    },
})

// Action creators are generated for each case reducer function
export const {} = employeeSlice.actions

export default employeeSlice.reducer