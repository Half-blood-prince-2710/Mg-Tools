import { configureStore } from "@reduxjs/toolkit";
import habitReducer from '@/redux-toolkit/features/habits/habitSlice'

const store = configureStore({
    reducer: {
        habits: habitReducer,
    },
})

export default store