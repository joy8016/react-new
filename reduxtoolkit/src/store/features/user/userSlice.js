import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    loading:false,
}

const fecthUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fecth("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }

)

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder.addCase(fecthUser.pending , (state, action)=>{
            state.loading = true
            
        })
        builder.addCase(fecthUser.fulfilled , (state, action)=>{
            state.loading = false

        })
        builder.addCase(fecthUser.rejected , (state, action)=>{
            state.loading = false

        })

    }

})



export const { } = usersSlice.actions
export default usersSlice.reducer
export { fecthUser }