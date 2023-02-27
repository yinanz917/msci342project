import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NavBar from '../Navigation/NavBar';

const Chat = () => {

    return (
        <Grid>
            <NavBar/>
            <Typography variant="h3" color="inherit" noWrap align='center'>
                Welcome to Zoommates Chat Page!
            </Typography>
        </Grid>


    );
}
export default Chat;