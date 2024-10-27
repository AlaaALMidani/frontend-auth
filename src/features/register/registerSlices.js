import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Fetch from '../../logic/logic.js'

const initialState = {
    loading: false,
    success: false,
    data: null,
    error: '',
};

export const fetchUser = createAsyncThunk('register/signIn', (data) => {
    Fetch.register(data).then((data) => data)
})
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''    
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = null 
            state.error = action.error
        })
    }
})

export default registerSlice.reducer