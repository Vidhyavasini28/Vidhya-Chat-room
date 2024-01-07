import React from 'react';
import Signin from './Signin';
import LogOut from './LogOut';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user]= useAuthState(auth)
    //console.log(user)
    
  return (

   
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 flex justify-between items-center p-4 font-serif'>
        <h1 className='animate-pulse bg-gradient-to-r from-red-700 via-purple-800 to-amber-600 bg-clip-text text-transparent text-3xl'>Chat Room</h1>
        {user ? <LogOut /> : <Signin />}
        
        </div>

  )
}

export default Navbar;