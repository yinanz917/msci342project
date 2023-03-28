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
import { useAuth } from '../Firebase/context';


import NavBar from '../Navigation/NavBar';
import '../../index.css';


const serverURL = "";

const MyProfile = (props) => {

  const { currentUser } = useAuth()
  const email = currentUser.email
  const [accountInfo, setAccountInfo] = React.useState([]);
  const [profilePhoto, setProfilePhoto] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [zprofile, setZProfile] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const index = 0;

  // const reviews =
  //   [{ name: "Vyomesh Iyengar", photo: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1683158400&v=beta&t=Fiy4Lb2knxD6Ka-WsfsC5PJJH50YCfL1N_YGgTe7oF4", score: "5.0", review: "Amazing roommate, was very clean and always helped out with the dishes!" },
  //   { name: "Andre Larocque", photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk", score: "4.0", review: "Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! " },
  //   { name: "Keegan Fernandes", photo: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_100_100/0/1673411388008?e=1683158400&v=beta&t=9NrzIE8R3NYrVh7vK9B1G6PVQ-aSZVn7IpMGGIuIIPE", score: "5.0", review: "Sick!" },
  //   { name: "Harry Potter", photo: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg", score: "3.5", review: "Very cool" },
  //   { name: "Hermione Granger", photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg", score: "4.0", review: "Do better." }
  //   ]

  React.useEffect(() => {
    loadProfile();
    loadZProfile();
    getReviews();
    getProfilePicture();
    getAccountInfo();
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
      },
      body: JSON.stringify({
        email: email
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

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
      },
      body: JSON.stringify({
        email: email
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  const getProfilePicture = () => {
    callApiGetProfilePicture()
      .then(res => {
        console.log("callApiGetProfilePicture returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiGetProfilePicture parsed: ", parsed)
        setProfilePhoto(parsed);
      });
  }

  //API to get first name, last name, and photo
  const callApiGetProfilePicture = async () => {
    const url = serverURL + "/api/getProfilePicture";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  /**
   * WORK IN PROGRESS: REVIEWS API CALLS
   */

  const getReviews = () => {
    callApiGetReviews()
      .then(res => {
        console.log("callApiGetReviews returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiGetReviews parsed: ", parsed)
        setReviews(parsed);
      });
  }

  const callApiGetReviews = async () => {
    const url = serverURL + "/api/getReviews";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  const getAccountInfo = () => {
    callApiGetAccountInfo()
      .then(res => {
        console.log("callApiGetAccountInfo returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiGetAccountInfo() parsed: ", parsed)
        setAccountInfo(parsed);
      });
  }

  //API to get first name, last name, and photo
  const callApiGetAccountInfo = async () => {
    const url = serverURL + "/api/getAccountInfo";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }



  /**
   * WIP GET OTHER USER ACC INFO
   */

  const getOtherAccount = () => {
    callApiGetOtherAccount()
      .then(res => {
        console.log("callApiGetOtherAccount returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiGetOtherAccount() parsed: ", parsed)
        setAccountInfo(parsed);
      });
  }

  //API to get first name, last name, and photo
  const callApiGetOtherAccount = async () => {
    const url = serverURL + "/api/getOtherAccount";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      })
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
                  alt={currentUser.email}
                  sx={{ width: 240, height: 240 }}
                  src={profilePhoto && profilePhoto[0] && profilePhoto[0].photo} />
              </Grid>

              <Grid item paddingTop={4}>
                <Button variant="outlined" paddingTop={8} component={Link} to="/myprofile">Edit Profile</Button>
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
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <Typography variant='h2'>My Zoommate</Typography>
              <Grid item paddingTop={4}>
                <Button variant="outlined" paddingTop={8} component={Link} to="/zmprofile">Edit Profile</Button>
              </Grid>
            </Stack>

            <Stack direction="row" spacing={8}>
              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Max Age</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.AgeMax}</Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Min Age</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.AgeMin}</Typography>
                ))}
              </Box>

              <Box>
                <Typography variant="overline" display="block" paddingTop={4}>Preferred Sex</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.ZMSex}</Typography>
                ))}
              </Box>
            </Stack>

            <Grid container spacing={4} paddingY={8}>
              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Cleanliness</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.Clean}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Noise Level</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.Noise}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Share Level</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.Share}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Social Level</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.Social}</Typography>
                ))}
              </Grid>

              <Grid item>
                <Typography variant="overline" display="block" paddingTop={4}>Weekly Guests</Typography>
                {zprofile.map((person) => (
                  <Typography variant='h5'>{person.Guest}</Typography>
                ))}
              </Grid>
            </Grid>

            <Divider>
              <Chip label="Reviews" />
            </Divider>

            <Grid marginTop={8} marginBottom={4}>
              <Typography variant='h3' charset='UTF-8'>Profile Reviews 📋 </Typography>
            </Grid>
            <Grid>
              {reviews.map((review, index) => {
                index++;
                return (
                  <Grid>
                    <Grid marginTop={4}>
                      <Stack direction="row" spacing={4}>
                        <Avatar
                          alt={accountInfo[0].firstName + " " + accountInfo[0].lastName}
                          sx={{ width: 56, height: 56 }}
                          src={accountInfo[0].photo} />
                        <Stack direction="column">
                          <Typography variant='h6'><b>⭐ {review.score}</b> </Typography>
                          <Typography variant='h6'>{review.body} </Typography>
                          <Typography variant='overline'><b>{accountInfo[0].firstName + " " + accountInfo[0].lastName}</b></Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>

          </Grid>

        </Container >
      </Grid >
    </div >
  );
}

export default MyProfile;