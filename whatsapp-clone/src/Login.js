import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core"
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="data:image/jpeg;base64,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"
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
