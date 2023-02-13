import React from "react";

import { useDispatch } from "react-redux";

import { UserLogin } from "./ReduxState/ReduxState";

const LoginPage = () =>{

    const dispatch = useDispatch();

    <div>
        <button>
            Login
        </button>

        <button>
            Logout
        </button>
    </div>
}

export default LoginPage;