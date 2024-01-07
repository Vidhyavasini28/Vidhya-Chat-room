import React from 'react'
import {auth} from '../firebase'


const LogOut = () => {
    const signOut = ()=> {
        signOut(auth)
    }
    
  return (
    <button onClick={()=> auth.signOut()} className='rounded-lg shadow-md shadow-rose-800 hover:translate-y-4 hover:shadow-lg hover:bg-stone-700 transition delay-300 duration-300 animate-pulse bg-black text-white px-4 py-2 '>
        LogOut
    </button>
  )
}

export default LogOut