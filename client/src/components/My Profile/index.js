import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';


import NavBar from '../Navigation/NavBar';
import '../../index.css';


const serverURL = "";

const MyProfile = (props) => {

  const [profile, setProfile] = React.useState([]);
  const [zprofile, setZProfile] = React.useState([]);

  React.useEffect(() => {
    loadProfile();
  }, []);

  React.useEffect(() => {
    loadZProfile();
  }, []);


  // Calling user profiles
  const loadProfile = () => {
    callApiLoadProfile()
      .then(res => {
        console.log("test2");
        console.log("callApiLoadProfile returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiLoadProfile parsed: ", parsed);
        setProfile(parsed);
      })
  }

  const callApiLoadProfile = async () => {
    const url = serverURL + "/api/loadProfile";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  /** Hard coded values */
  // const name = 'Yinan Zhang';
  // const age = '21';
  // const sex = 'Female'
  // const pronouns = 'she/her';
  // const budget = '2300';
  // const location = 'Seattle';
  // const hasPet = 'False';
  // const hobbyList = ["Dancing", "Hiking", "Singing"];

  //Calling zoommate profile
  const loadZProfile = () => {
    callApiLoadZProfile()
      .then(res => {
        console.log("test2");
        console.log("callApiLoadZProfile returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiLoadZProfile parsed: ", parsed);
        setZProfile(parsed);
      })
  }

  const callApiLoadZProfile = async () => {
    const url = serverURL + "/api/loadZProfile";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  return (
    <div>
      <NavBar />

      <Grid marginY={8}>
        <Container maxWidth="md">
          <Typography className='title-text' variant="h3" marginBottom={8}>Profiles of your Zoommate Experience</Typography>
          <Divider>
            <Chip margin={4} label="Your Profile" />
          </Divider>
          <Stack direction="row" spacing={8} marginY={8}>
            <Grid spacing={8} align="center">
              <Grid item>
                <Avatar
                  alt="Yinan Zhang"
                  sx={{ width: 240, height: 240 }}
                  src="https://media.licdn.com/dms/image/C4E03AQG9NqDyKiM7xA/profile-displayphoto-shrink_800_800/0/1636655410891?e=1682553600&v=beta&t=2p-PKSLrMmCxCLXEmswjWrmdZNmVWwqniYm4uDMuONg" />
              </Grid>

              <Grid item paddingTop={4}>
                <Button variant="outlined" paddingTop={8} component={Link} to="/profile">Edit Profile</Button>
              </Grid>


            </Grid>
            <Grid>
              {profile.map((person) => (
                <Typography variant='h2'>{person.username}</Typography>
              ))}

              <Stack direction="row" spacing={8}>
                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Age</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.age}</Typography>
                  ))}
                </Box>

                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Sex</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.sex}</Typography>
                  ))}
                </Box>

                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Pronouns</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.pronouns}</Typography>
                  ))}
                </Box>
              </Stack>

              <Grid container spacing={8} paddingTop={8}>
                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Monthly Budget</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.budget}</Typography>
                  ))}
                </Grid>

                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Location</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.city}</Typography>
                  ))}
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Has Pets 🐶</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.pets}</Typography>
                  ))}
                </Grid>

                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Hobbies</Typography>
                  {profile.map((person) => (
                    <Typography variant='h5'>{person.hobbies}</Typography>
                  ))}
                </Grid>
              </Grid>

            </Grid>
          </Stack>

          <Divider>
            <Chip margin={4} label="Zoommate Profile" />
          </Divider>

          <Typography paddingTop={8}>These are traits of your ideal roommate</Typography>

          <Grid>
            <Stack direction="row">
              {profile.map((person) => (
                <Typography variant='h2'>My Zoommate</Typography>
              ))}
              <Grid item paddingTop={4}>
                <Button variant="outlined" paddingTop={8} component={Link} to="/zoommateprofile">Edit Profile</Button>
              </Grid>
            </Stack>


            <Stack direction="row" spacing={8}>
              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Max Age</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.age}</Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Min Age</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.sex}</Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Preferred Sex</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.pronouns}</Typography>
                ))}
              </Box>
            </Stack>

            <Grid container spacing={4} paddingTop={8}>
              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Cleanliness</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.budget}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Noise Level</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.city}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Share Level</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.pets}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Social Level</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.hobbies}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Social Level</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.hobbies}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Guest Level</Typography>
                {profile.map((person) => (
                  <Typography variant='h5'>{person.hobbies}</Typography>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Grid>
    </div >
  );
}

export default MyProfile;