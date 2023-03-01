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

const myProfile = (props) => {

  /** @ andre to-do: connect these variables to data base */
  const name = 'Yinan Zhang';
  const age = '21';
  const sex = 'Female'
  const pronouns = 'she/her';
  const budget = '2300';
  const location = 'Seattle';
  const cleanliness = '9';
  const noiseLevel = '7';
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
              <Typography variant='h2' paddingTop={4}>{name} &#128037;</Typography>

              <Stack direction="row" spacing={8}>
                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Age</Typography>
                  <Typography variant='h5'>{age}</Typography>
                </Box>

                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Sex</Typography>
                  <Typography variant='h5'>{sex}</Typography>
                </Box>

                <Box>
                  <Typography variant="overline" display="block" paddingTop={4}>Pronouns</Typography>
                  <Typography variant='h5'>{pronouns}</Typography>
                </Box>
              </Stack>

              <Grid container spacing={8} paddingTop={8}>
                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Monthly Budget 💰</Typography>
                  <Typography variant='body1'>${budget}</Typography>
                </Grid>

                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Location 📍</Typography>
                  <Typography variant='body1'>{location}</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Cleanliness 🧼</Typography>
                  <Typography variant='body1'>{cleanliness}/10</Typography>
                </Grid>

                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Noise Level 🔊</Typography>
                  <Typography variant='body1'>{noiseLevel}/10</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Has Pets 🐶</Typography>
                  <Typography variant='body1'>{hasPet}</Typography>
                </Grid>

                <Grid item>
                  <Typography variant="overline" display="block" paddingTop={4}>Hobbies 🏓</Typography>
                  <Typography variant="body1">
                    {
                      hobbyList.map((hobby, index) =>
                        (hobby) + (index != hobbyList.length - 1 ? ', ' : ' '))
                    }
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          </Stack>

        </Container>
      </Grid>



    </div >
  );
}

export default myProfile;