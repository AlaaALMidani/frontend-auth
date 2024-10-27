import { configureStore } from '@reduxjs/toolkit'
import {registerSlice} from './features/register/registerSlices'
export default configureStore({
    reducer: {
        register:registerSlice
    },
})

