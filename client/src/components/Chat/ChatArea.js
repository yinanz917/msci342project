import React from 'react'
import '../Chat/index.css';
import Button from '@mui/material/Button';
import Messages from "../Chat/Messages";
import Input from "../Chat/Input";

const ChatArea = () => {
    return(
        <div className="chatarea"> 
            <div className='chatInfo'>
                <span>Vyomesh Iyengar</span>
                <div className='chatbuttons'>
                <Button variant="text">Write a Review</Button>
                <Button variant="contained">Go to Profile</Button>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default ChatArea