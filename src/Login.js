import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase"
import {actionTypes} from "./reducer"
import {useStateValue} from "./StateProvider"

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
                console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return <div className="login">
                <div className="login_logo">
                <img
                    src="https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png"
                    alt=""
                />
                <h3>Log in</h3>
                </div>

                <Button type="submit" onClick={signIn}>
                Sign In
                </Button>
        </div>;
}

export default Login
