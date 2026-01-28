import { configureStore } from "@reduxjs/toolkit";

import popupReducer from '../features/popup/popupSlice'
import employeeReducer from '../features/employee/employeeslice'

export const store = configureStore({
    reducer:{
        popup:popupReducer,
        // employeeReducer
        employee:employeeReducer
       
        
       
        
       

    },

})
