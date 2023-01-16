import {configureStore} from '@reduxjs/toolkit'
import emailReducer from './emailsDataSlice'

export const store = configureStore({
    reducer : {
        emails : emailReducer,
    }
})