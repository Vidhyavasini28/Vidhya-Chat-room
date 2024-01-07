import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import SendMessage from './SendMessage';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
            scrollToBottom();
        });
        return () => unsubscribe();
    }, []);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    const sendMessage = async (text) => {
        if (text.trim() === '') return;

        try {
            await addDoc(collection(db, 'messages'), {
                text: text,
                timestamp: serverTimestamp(),
            });
            scrollToBottom(); // Scroll to bottom after sending message
        } catch (error) {
            console.error('Error sending message: ', error);
        }
    };

    return (
        <div className='flex flex-col h-screen'>
            <main
                ref={chatContainerRef}
                className='flex flex-col p-4 overflow-y-auto border h-[70vh] max-h-[70vh]'
            >
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </main>
            <SendMessage sendMessage={sendMessage} />
        </div>
    );
};

export default Chat;
