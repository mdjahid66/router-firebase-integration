import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>

            <button onClick={signInWithGoogle}>Google Sign In</button>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;