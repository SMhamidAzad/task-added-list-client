import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
  
    return (
        <div>
            <h2 className='text-center my-5'>Welcome to To Do App</h2>
            <h3 className='text-center'>Please Login Here</h3>
            <div onClick={()=>signInWithGoogle()} className='d-flex justify-content-center'>
                <button  type="button" class="btn btn-success fw-bold mt-4">Signin with Google</button>
            </div>
           

        </div>
    );
};

export default Login;