import React from 'react'
import '../Chat/index.css';
import Message from "../Chat/Message"

const Messages = () => {
    return(
        <div className='messages'> 
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}

export default Messages