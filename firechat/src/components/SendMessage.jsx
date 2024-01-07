import React, { useState } from 'react'
import {auth,db} from '../firebase'
import { addDoc, collection,serverTimestamp } from 'firebase/firestore';

const SendMessage = ({scroll}) => {
    const [input,setInput]=useState('');
    const sendMessage = async (e)=>{
        e.preventDefault()
        if(input==''){
            alert('Please enter a message')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db,'messages'),{
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
    })
    setInput('')
    
        
    }
  return (
    <form onSubmit={sendMessage} className='h-14 w-full max-w-[t28px] flex text-xl absolute bottom-0'>
        <input 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className='w-full text-xl  p-3 bg-[#2d2b3c] rounded-xl text-white font-serif outline-none border-none' 
        type="text" 
        placeholder='Message'/>
        <button className='animate-pulse rounded-lg shadow-md shadow-black  hover:shadow-lg hover:bg-red-950 transition delay-100 duration-800  w-[20%] bg-blue-700  font-serif' type='submit'>Send</button>
    </form>
  )
}

export default SendMessage