import React from 'react'
import {auth,provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie'
import "../styles/auth.css"


const cookies=new Cookies()
export const Authentication = (props) => {
    const {setIsAuth}=props;
    async function signIn(){

        try{
            const result = await signInWithPopup(auth, provider);
            //Set cookies
            cookies.set("auth-token", result.user.refreshToken);

            const timeOutInMilli=10*60*1000;
            cookies.set("auth-token",result.user.refreshToken,{maxAge:timeOutInMilli});
            setIsAuth(true);
        }
        catch(err){
            console.log(err)
        }
    }

  
  return (
    <div className='auth'>
        <p>Sign in with google to continue</p>
        <button onClick={signIn}>Sign In with Google</button>
    </div>
  )
}

