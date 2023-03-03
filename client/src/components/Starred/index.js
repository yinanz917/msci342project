import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NavBar from '../Navigation/NavBar';
import '../../index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ChatIcon from '@mui/icons-material/Chat';

const serverURL = "";

const Starred = (props) => {

    const [starredPeople, setStarredPeople] = React.useState([]);

    React.useEffect(() => {
        loadStarred();
      }, []);

    const loadStarred = () => {
    callApiLoadStarred()
      .then(res => {
        console.log("test2");
        console.log("callApiLoadStarred returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiLoadStarred parsed: ", parsed);
        setStarredPeople(parsed);
      })
  }

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
            <Container >
            <Typography className='title-text' variant="h3">
                <b>The stars of your Zoommate experience</b>
            </Typography>
            </Container>
            <Container>
            <Grid spacing={4} container direction="row">
                {starredPeople.map((person) => (
                    <Grid item xs={6} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, marginTop: 4}} >
                    <CardHeader
                        avatar={
                        <Avatar alt={person.name} src={person.photo} sx={{ width: 56, height: 56 }} />
                        }
                        title= {<Typography gutterBottom variant="h5" component="h2">
                        {person.name}
                     </Typography>}
                        subheader={person.username}
                    />
                    <CardActions>
                        <Button size="medium" variant="contained" startIcon={<ChatIcon/>}>Chat</Button>
                        <Button size="medium"><b>View Profile</b></Button>
                    </CardActions>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </Grid>
    );
}

export default Starred;