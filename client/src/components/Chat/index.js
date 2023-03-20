import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import NavBar from '../Navigation/NavBar';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';

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
        
        
        <Stack direction="column">
        <Box sx={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        maxHeight:780
        }}>
        {chats.map((chat) => (
            <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <Card sx={{ width: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar alt={chat.name} src={chat.photo} sx={{ width: 56, height: 56 }} />
                    }
                    title= {<Typography><b>{chat.username}</b></Typography>}
                    action={
                        <IconButton aria-label="settings">
                          <ArrowCircleRightIcon sx={{color: blue[500]}} />
                        </IconButton>
                      }
                    subheader={<Typography variant='caption'><i>Last Activity</i>: September 15 2023 </Typography>}
                    
                />
            </Card>
            </List>
        ))}
        </Box>
        </Stack>
        
        {/* this needs to be connected to a secondary map from an api which brings the chat information for the specific selected user */}
        <Grid backgroundColor="blue" container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant='h4' paddingTop={2}><b>Person name</b></Typography>
            </Grid>*
            <Grid item>
                <Button size="medium"><b>View Profile</b></Button>
            </Grid>
        </Grid>
        
    </Grid>
);
}
export default Chat;