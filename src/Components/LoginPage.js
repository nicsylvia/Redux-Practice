import React from 'react';

import useDispatch from "react-redux";
import { LoginUser } from './ReduxState/ReduxState';

const LoginPage = () => {

    const dispatch = useDispatch();
  return (
    <div>
        <button 
        onClick={() =>{
            dispatch(
                LoginUser({
                    username: "Sylvia Adimike",
                    email: "nicsylvia15f@gmail.com",
                    stack: "Full MERN Stack",
                    phoneNo: "09061180473"
                })
            )
        }}
        >Login</button>

        <button>Logout</button>
    </div>
  )
}

export default LoginPage