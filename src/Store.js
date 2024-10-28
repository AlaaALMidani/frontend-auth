import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './features/register/registerSlices.js'
import loginSlice from './features/login/loginSlices.js'

const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice
    },
})

export default store
