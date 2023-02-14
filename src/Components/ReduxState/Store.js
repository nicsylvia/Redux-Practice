import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ReduxState"

export const Store = configureStore({
    Reducer: {
        reducer
    }
})