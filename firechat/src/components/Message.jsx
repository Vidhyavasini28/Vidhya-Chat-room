import React from 'react'
import {auth} from '../firebase'
const style ={
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full font-serif rounded-tr-full`,
    send:`bg-[#AA336A] text-black float-right flex-row-reverse text-end font-serif rounded-br-full`,
    received:`bg-[#8282Ee] text-black float-left font-serif rounded-br-full`,
};

const Message = ({message}) => {
    const messageClass= 
    message.uid === auth.currentUser.uid
    ? `${style.send}`
    : `${style.received}`
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className='absolute font-serif mt-[-4rem] text-blue-400 text-xs'>{message.name}</p>
            <p >{message.text}</p>

        </div>
    </div>
  )
}

export default Message