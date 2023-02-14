import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    current: null
};

const ReduxState = createSlice({
    name: "Users",
    intialState,
    reducers: {
        LoginUser: (state, actions) =>{
            state.current = actions.payload
        },
        LogOutUser: (state) =>{
            state.current = null
        }
    }
});

export const { LoginUser } = ReduxState.actions;

export default ReduxState.reducer