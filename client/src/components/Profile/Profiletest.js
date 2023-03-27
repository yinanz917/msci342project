import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const serverURL = ""; // dev mode


const Profile = () => {

  return (
    <div>
      <div>
        <Location/>
        </div>

     <div>
          <Button
            variant="contained"
            color="primary"
          >
            Submit Profile
          </Button>
      </div>
    </div >
  );
}

const Location = (props) => {
  const errMessage = 'Please enter your location.';

  return (
    <div>
        <TextField
          id="single-input"
          size="small"
          placeholder="Enter a city"
          variant='outlined'
        />
    </div>
  )
}



export default Profile;