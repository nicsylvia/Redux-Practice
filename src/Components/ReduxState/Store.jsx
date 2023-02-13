import { configureStore } from "@reduxjs/toolkit";

import reducers from "./ReduxState";

export const Store = configureStore({
    reducer : {
        reducers
    }
})