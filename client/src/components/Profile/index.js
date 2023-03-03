import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import NavBar from '../Navigation/NavBar';

const serverURL = ""; // dev mode


const Profile = () => {

  //defining states
  const [enteredAge, setAge] = React.useState('');
  const [selectedSex, setSex] = React.useState('');
  const [selectedPronouns, setPronouns] = React.useState('');

  const [enteredBudget, setBudget] = React.useState('');
  const [enteredLocation, setLocation] = React.useState('');

  const [hasPet, setHasPet] = React.useState('');
  const [hobbyList, setHobbyList] = React.useState([]);

  const [submit, setSubmit] = React.useState(false);
  const [allValid, setValid] = React.useState(false);


  const handleAgeInput = (event) => {
    reset();
    setAge(event.target.value);
  }

  const handleSexSelection = (event) => {
    reset();
    setSex(event.target.value);
  }

  const handlePronounsSelection = (event) => {
    reset();
    setPronouns(event.target.value);
  }

  const handleBudgetInput = (event) => {
    reset();
    setBudget(event.target.value);
  }

  const handleLocationInput = (event) => {
    reset();
    setLocation(event.target.value);
  }

  const handleHobbyList = (event) => {
    const {
      target: { value },
    } = event;
    reset();
    setHobbyList(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handlePetSelect = (event) => {
    reset();
    setHasPet(event.target.value);
  }

  // Submission functions @yinan
  const isEmpty = (input) => (input === '');

  const reset = () => { // function that resets submit and valid states
    setSubmit(false);
    setValid(false);
  }

  const handleSubmit = (event) => {
    setSubmit(true);

    setMyProfile();

    if (!(isEmpty(enteredAge) ||
      isEmpty(selectedSex) ||
      isEmpty(selectedPronouns) ||
      isEmpty(enteredBudget) ||
      isEmpty(enteredLocation) ||
      isEmpty(hasPet) ||
      isEmpty(hobbyList))) {
      setValid(true); // if all fields are not empty, sets allValid to true
    }
  }

  /**
   * API CALLS TODO
   * @andre
   */

  const setMyProfile = async () => {
    callApiSetMyProfile()
      .then(res => {
        console.log("callApiSetMyProfile returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiSetMyProfile parsed: ", parsed[0])
      });
  }

  const callApiSetMyProfile = async () => {
    const url = serverURL + "/api/setMyProfile";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        age: enteredAge,
        sex: selectedSex,
        pronouns: selectedPronouns,
        budget: enteredBudget,
        city: enteredLocation,

        pets: hasPet,
        hobbies: hobbyList
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("Found profile: ", body);
    return body;
  }

  return (
    <div>
      <NavBar />

      <Grid marginTop={2}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterTop color="inherit" noWrap align='center' paddingBottom={1}>
            Create your profile
          </Typography>
          <Typography variant="body1" color="inherit" noWrap align='center'>
            Fill out this questionnaire about yourself to set up your profile.
          </Typography>
        </Container>
      </Grid>

      <Grid marginTop={8} id='Basic Info'>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            1. Basic Info
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='age'>
              <Age
                onType={handleAgeInput}
                userAge={enteredAge}
                isEmpty={isEmpty(enteredAge)}
                submit={submit}
              />
            </Grid>

            <Grid item id='sex'>
              <Sex
                onSelect={handleSexSelection}
                userSex={selectedSex}
                isEmpty={isEmpty(selectedSex)}
                submit={submit}
              />
            </Grid>

            <Grid item id='pronouns'>
              <Pronouns
                onSelect={handlePronounsSelection}
                userPronouns={selectedPronouns}
                isEmpty={isEmpty(selectedPronouns)}
                submit={submit}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid marginTop={8} id='Housing Details'>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            2. Housing Details
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='budget'>
              <Budget
                onType={handleBudgetInput}
                userBudget={enteredBudget}
                isEmpty={isEmpty(enteredBudget)}
                submit={submit}
              />
            </Grid>

            <Grid item id='location'>
              <Location
                onType={handleLocationInput}
                userLocation={enteredLocation}
                isEmpty={isEmpty(enteredLocation)}
                submit={submit}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid marginTop={8} id='Lifestyle'>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            3. Lifestyle
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">

            <Grid item id='pets'>
              <Pets
                onSelect={handlePetSelect}
                userHasPet={hasPet}
                isEmpty={isEmpty(hasPet)}
                submit={submit}
              />
            </Grid>

            <Grid item id='hobbies'>
              <Hobbies
                onSelect={handleHobbyList}
                userHobbies={hobbyList}
                isEmpty={isEmpty(hobbyList)}
                submit={submit}
              />
            </Grid>

          </Grid>
        </Container>
      </Grid>

      <Grid marginTop={8} id='Submit'>
        <Container maxWidth="sm">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit Profile
          </Button>
          {(submit && allValid) && // shows succcess state if submitted and all valid
            <Typography variant="subtitle2" display="block" style={{ color: 'green', paddingTop: 12 }}>Success! You've completed your profile.</Typography>
          }
        </Container>
      </Grid>
    </div >
  );
}

const Age = (props) => {
  const errMessage = 'Please enter your age.';

  return (
    <div>
      <FormControl fullWidth error={(props.isEmpty && props.submit)}>
        <FormLabel style={{ paddingBottom: 12 }}>What is your age?</FormLabel>
        <TextField
          id="single-input"
          size="small"
          placeholder="Enter your age"
          variant='outlined'
          onChange={props.onType}
        />
        <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
      </FormControl>
    </div>
  )
}

const Sex = (props) => {
  const sex = ['Female', 'Male', 'Other'];
  const errMessage = 'Please enter your sex.';

  return (
    <FormControl fullWidth error={(props.isEmpty && props.submit)}>
      <FormLabel>What is your sex?</FormLabel>
      <RadioGroup
        onChange={props.onSelect}
      >
        {sex.map((sex) => (
          <FormControlLabel value={sex} control={<Radio color="primary" />} label={sex} />
        ))}
      </RadioGroup>
      <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
    </FormControl>
  )
}

const Pronouns = (props) => {
  const errMessage = 'Please select your pronouns.';
  const pronouns = ['She/her', 'He/him', 'They/them'];

  return (
    <FormControl fullWidth error={(props.isEmpty && props.submit)}>
      <FormLabel>What are your pronouns?</FormLabel>
      <RadioGroup
        row
        onChange={props.onSelect}
      >
        {pronouns.map((pronouns) => (
          <FormControlLabel value={pronouns} control={<Radio color="primary" />} label={pronouns} />
        ))}
      </RadioGroup>
      <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
    </FormControl>
  )
}

const Budget = (props) => {
  const errMessage = 'Please enter your approximate budget.';

  return (
    <div>
      <FormControl fullWidth error={(props.isEmpty && props.submit)}>
        <FormLabel style={{ paddingBottom: 12 }}>What's your monthly max budget?</FormLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          size="small"
          placeholder="Enter an approximate number"
          variant='outlined'
          onChange={props.onType}
        />
        <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
      </FormControl>
    </div>
  )
}

const Location = (props) => {
  const errMessage = 'Please enter your location.';

  return (
    <div>
      <FormControl fullWidth error={(props.isEmpty && props.submit)}>
        <FormLabel style={{ paddingBottom: 12 }}>In which city are you looking for roommates to live with?</FormLabel>
        <TextField
          id="single-input"
          size="small"
          placeholder="Enter a city"
          variant='outlined'
          onChange={props.onType}
          helperText={(props.submit && props.isEmpty) ? '' : ("Ex. Seattle")}
        />
        <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
      </FormControl>
    </div>
  )
}

const Pets = (props) => {
  const errMessage = 'Please choose Yes or No.';
  const options = ['Yes', 'No'];

  return (
    <FormControl fullWidth error={(props.isEmpty && props.submit)}>
      <FormLabel>Do you have any pets?</FormLabel>
      <RadioGroup
        row
        onChange={props.onSelect}
      >
        {options.map((options) => (
          <FormControlLabel value={options} control={<Radio color="primary" />} label={options} />
        ))}
      </RadioGroup>
      <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
    </FormControl>
  )
}

const Hobbies = (props) => {
  const errMessage = 'Please select at least one hobby.';
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 16;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const hobbies = [
    'Hiking',
    'Reading',
    'Singing',
    'Dancing',
    'Sports',
    'Gaming',
    'Cooking',
    'Writing',
    'Travelling',
    'Photography',
  ];

  return (
    <div>
      <FormControl fullWidth error={(props.isEmpty && props.submit)}>
        <FormLabel>Let us know some some of your hobbies are! Select as many as you want.</FormLabel>
        <Select
          id="demo-multiple-chip"
          multiple
          value={props.userHobbies}
          error={(props.isEmpty && props.submit)}
          onChange={props.onSelect}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {hobbies.map((hobby) => (
            <MenuItem key={hobby} value={hobby}>{hobby}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Profile;