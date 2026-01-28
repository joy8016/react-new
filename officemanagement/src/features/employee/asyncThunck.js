import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";


export const getdetails = createAsyncThunk(
    //type

    'employee/getdetails',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('employee');
          
            return response.data;

        } catch (error) {
            return rejectWithValue('something went wrong');

        }

    }

)
// export default getdetails;
export const postDetails = createAsyncThunk(
    //type

    'employee/getdetails',
    async (details, { rejectWithValue }) => {
        try {
            const response = await api.post('employee', details);
          
            return response.data;

        } catch (error) {
            return rejectWithValue('something went wrong');

        }

    }

)


