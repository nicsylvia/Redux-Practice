import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: null
};

const ReduxState = createSlice({
    name: "User",
    initialState,
    reducers: {
        UserLogin: (state, actions) =>{
            state.current = actions.payload
        },
        UserLogOut: (state) =>{
            state.current = null
        }
    }
});

export const { UserLogin } = ReduxState.actions;

export default ReduxState.reducers;