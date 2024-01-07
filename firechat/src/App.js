import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


function App() {
const [user]= useAuthState(auth)

  return (
    <div className='bg-gradient-to-bl from-blue-900 to-black'>
    <div className='max-w-[728px] mx-auto text-center'>
  
      <section className='flex flex-col h-[90vh] bg-black mt-10 shadow-xl border relative '>
        
        {/*Navbar*/}
        <Navbar />
       {user ? <Chat /> : null}
      
      </section>
    </div>
</div>
  );
}

export default App;
