import React from 'react'
import '../Chat/index.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Input = () => {
    return(
        <div className='input'> 
            <input type = 'text' placeholder='Type something here...'/>
            <div className='send'>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            </div>
        </div>
    )
}

export default Input