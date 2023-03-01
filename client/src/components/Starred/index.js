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
    // const people = [
    //     {name :"Yinan Zhang", picture: "https://media.licdn.com/dms/image/C4E03AQG9NqDyKiM7xA/profile-displayphoto-shrink_800_800/0/1636655410891?e=1682553600&v=beta&t=2p-PKSLrMmCxCLXEmswjWrmdZNmVWwqniYm4uDMuONg", username:"yinan123"},
    //     {name :"Andre Larocque", picture: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1682553600&v=beta&t=LYvZMSl4ZfGWWWw4A7-OvfrhbySZz8JCMbhmRsHntVw", username:"bandre"},
    //     {name :"Vyomesh Iyengar", picture: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1682553600&v=beta&t=tIU-Df1ZhV_PI4RlaHoeTQFw1_eutkeYGGKdwlRCEqc", username:"yumyom"},
    //     {name :"Keegan Fernandes", picture: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_800_800/0/1673411388008?e=1682553600&v=beta&t=8MFCx50CEDI3j7u02wn66QJFEoMoUX3uyCGv51XQghA", username:"soccerboi"},
    //     {name :"Yinan Zhang", picture: "https://media.licdn.com/dms/image/C4E03AQG9NqDyKiM7xA/profile-displayphoto-shrink_800_800/0/1636655410891?e=1682553600&v=beta&t=2p-PKSLrMmCxCLXEmswjWrmdZNmVWwqniYm4uDMuONg", username:"yinan123"},
    //     {name :"Andre Larocque", picture: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1682553600&v=beta&t=LYvZMSl4ZfGWWWw4A7-OvfrhbySZz8JCMbhmRsHntVw", username:"bandre"},
    //     {name :"Vyomesh Iyengar", picture: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1682553600&v=beta&t=tIU-Df1ZhV_PI4RlaHoeTQFw1_eutkeYGGKdwlRCEqc", username:"yumyom"},
    //     {name :"Keegan Fernandes", picture: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_800_800/0/1673411388008?e=1682553600&v=beta&t=8MFCx50CEDI3j7u02wn66QJFEoMoUX3uyCGv51XQghA", username:"soccerboi"},
    //     {name :"Yinan Zhang", picture: "https://media.licdn.com/dms/image/C4E03AQG9NqDyKiM7xA/profile-displayphoto-shrink_800_800/0/1636655410891?e=1682553600&v=beta&t=2p-PKSLrMmCxCLXEmswjWrmdZNmVWwqniYm4uDMuONg", username:"yinan123"},
    //     {name :"Andre Larocque", picture: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1682553600&v=beta&t=LYvZMSl4ZfGWWWw4A7-OvfrhbySZz8JCMbhmRsHntVw", username:"bandre"},
    //     {name :"Vyomesh Iyengar", picture: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1682553600&v=beta&t=tIU-Df1ZhV_PI4RlaHoeTQFw1_eutkeYGGKdwlRCEqc", username:"yumyom"},
    //     {name :"Keegan Fernandes", picture: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_800_800/0/1673411388008?e=1682553600&v=beta&t=8MFCx50CEDI3j7u02wn66QJFEoMoUX3uyCGv51XQghA", username:"soccerboi"}
    // ]

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
                        <Avatar alt={person.username} src={person.photo} sx={{ width: 56, height: 56 }} />
                        }
                        title= {<Typography gutterBottom variant="h5" component="h2">
                        {person.username}
                     </Typography>}
                        subheader={person.email}
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