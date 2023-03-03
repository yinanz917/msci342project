import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';


import NavBar from '../Navigation/NavBar';
import '../../index.css';


const serverURL = "";

const MyProfile = (props) => {

  const [profile, setProfile] = React.useState([]);

  React.useEffect(() => {
        loadProfile();
      }, []);

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

  const callApiLoadProfile= async () => {
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

  /** @ andre to-do: connect these variables to data base */
  const name = 'Yinan Zhang';
  const age = '21';
  const sex = 'Female'
  const pronouns = 'she/her';
  const budget = '2300';
  const location = 'Seattle';
  const hasPet = 'False';
  const hobbyList = ["Dancing", "Hiking", "Singing"];



  return (
    <div>
      <NavBar />

      <Grid marginTop={8}>
        <Container maxWidth="md">
          <Stack direction="row" spacing={8}>
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
            {/* <Typography variant="overline" display="block" paddingTop={4}>UserName</Typography> */}
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

        </Container>
      </Grid>



    </div >
  );
}

export default MyProfile;