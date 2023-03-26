import React from 'react'
import '../Chat/index.css';

const Message = () => {
    return(
        <div className='message owner'>
            <div className='messageInfo'>
                <img className='messageInfo' src="https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1684972800&v=beta&t=8kVOWzk5uehmebzjaU1GmeXpHRS42EXPwd5V8FYccWQ"></img>
                <span className='messageInfo'> Just now</span>
                </div>
            <div className='messageContent'>
                <p className='owner'>Hello!</p>
                <img className='messageContent' src="https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1684972800&v=beta&t=8kVOWzk5uehmebzjaU1GmeXpHRS42EXPwd5V8FYccWQ"></img>
            </div>
        </div>
    )
}

export default Message;