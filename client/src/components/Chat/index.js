// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import NavBar from '../Navigation/NavBar';

// const Chat = () => {

//     return (
//         <Grid>
//             <NavBar/>
//             <Typography variant="h3" color="inherit" noWrap align='center'>
//                 Welcome to Zoommates Chat Page!
//             </Typography>
//         </Grid>


//     );
// }
// export default Chat;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '80vh',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    overflowY: 'scroll',
    marginBottom: '20px',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '10px',
  },
  avatar: {
    marginRight: '10px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: '20px',
  },
  inputField: {
    flexGrow: 1,
    marginRight: '10px',
  },
}));

const ChatPage = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { sender: 'me', content: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.chatContainer}>
        {messages.map((message, index) => (
          <div className={classes.messageContainer} key={index}>
            <Avatar className={classes.avatar}>{message.sender}</Avatar>
            <div>{message.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={classes.inputContainer}>
        <TextField
          className={classes.inputField}
          label="Type your message"
          variant="outlined"
          value={inputValue}
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatPage;
