import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import { GoogleAuthProvider,signInWithRedirect} from 'firebase/auth'

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}
const Signin = () => {
  return (
    <div className='flex justify-center animate-spin rounded-lg shadow-md shadow-violet-950 hover:translate-y-4 hover:shadow-lg hover:bg-blue-950 transition delay-300 duration-300 '>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default Signin