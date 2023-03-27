import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const myProfile = (props) => {

  return (
    <div>
      <div>
        <div>
            <Button  id="reference" variant="outlined" paddingTop={8} component={Link} to="/profile">Edit Profile</Button>
        </div>
      </div>
    </div >
  );
}

export default myProfile;