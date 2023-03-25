import * as React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../Navigation/NavBar';
import Sidebar from '../Chat/Sidebar'
import ChatArea from '../Chat/ChatArea'
import ChatList from '../Chat/ChatList'
import '../Chat/index.css';

const serverURL = "";

const Chat = () => {
    
const [chats, setChats] = React.useState([]);

//change API to load all chats
React.useEffect(() => {
    loadStarred();
    }, []);

//change const to load all chats
const loadStarred = () => {
callApiLoadStarred()
    .then(res => {
    console.log("test2");
    console.log("callApiLoadStarred returned: ", res)
    var parsed = JSON.parse(res.express);
    console.log("callApiLoadStarred parsed: ", parsed);
    setChats(parsed);
    })
}


//load chats
const callApiLoadStarred = async () => {
const url = serverURL + "/api/loadStarred";
console.log(url);

const response = await fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    }
});
const body = await response.json();
if (response.status !== 200) throw Error(body.message);
console.log("Starred accounts: ", body);
return body;
}

return (
    <Grid container>
        <NavBar/>
        <Sidebar/>
        <ChatArea/>
        {/* <ChatList/> */}
    </Grid>
);
}
export default Chat;