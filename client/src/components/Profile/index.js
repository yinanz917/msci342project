import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const Profile = () => {

  //defining states
  const [enteredAge, setAge] = React.useState('');
  const [selectedSex, setSex] = React.useState('');
  const [selectedPronouns, setPronouns] = React.useState('');

  const [enteredBudget, setBudget] = React.useState('');
  const [enteredLocation, setLocation] = React.useState('');

  const [cleanLevel, setCleanLevel] = React.useState('');
  const [noiseLevel, setNoiseLevel] = React.useState('');
  const [hasPet, setHasPet] = React.useState('');
  const [hobbyList, setHobbyList] = React.useState([]);

  const [submit, setSubmit] = React.useState(false);

  const handleAgeInput = (event) => {
    setAge(event.target.value);
  }

  const handleSexSelection = (event) => {
    setSex(event.target.value);
  }

  const handlePronounsSelection = (event) => {
    setPronouns(event.target.value);
  }

  const handleBudgetInput = (event) => {
    setBudget(event.target.value);
  }

  const handleLocationInput = (event) => {
    setLocation(event.target.value);
  }

  const handleCleanLevel = (event) => {
    setCleanLevel(event.target.value);
  }

  const handleNoiseLevel = (event) => {
    setNoiseLevel(event.target.value);
  }

  const handleHobbyList = (event) => {
    const {
      target: { value },
    } = event;
    setHobbyList(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handlePetSelect = (event) => {
    setHasPet(event.target.value);
  }

  // TODO
  const handleSubmit = (event) => {
    setSubmit(true);
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


      <Grid marginTop={8}>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            1. Basic Info
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='age'>
              <Age
                onType={handleAgeInput}
                userAge={enteredAge}
              />
            </Grid>

            <Grid item id='sex'>
              <Sex
                onSelect={handleSexSelection}
                userSex={selectedSex}
              />
            </Grid>

            <Grid item id='pronouns'>
              <Pronouns
                onSelect={handlePronounsSelection}
                userPronouns={selectedPronouns}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>


      <Grid marginTop={8}>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            2. Housing Details
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='budget'>
              <Budget
                onType={handleBudgetInput}
                userBudget={enteredBudget}
              />
            </Grid>

            <Grid item id='location'>
              <Location
                onType={handleLocationInput}
                userLocation={enteredLocation}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>


      <Grid marginTop={8}>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
            3. Lifestyle
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='cleanliness'>
              <Cleanliness
                onChange={handleCleanLevel}
                userCleanLevel={cleanLevel}
              />
            </Grid>

            <Grid item id='noise-level'>
              <NoiseLevel
                onChange={handleNoiseLevel}
                userNoiseLevel={noiseLevel}
              />
            </Grid>

            <Grid item id='pets'>
              <Pets
                onSelect={handlePetSelect}
                userHasPet={hasPet}
              />
            </Grid>

            <Grid item id='hobbies'>
              <Hobbies
                onSelect={handleHobbyList}
                userHobbies={hobbyList}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid marginTop={8}>
        <Container maxWidth="sm">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit Profile
          </Button>
          {/* {(submit && allValid) && // shows succcess state if submitted and all valid
            <Typography variant="subtitle2" display="block" style={{ color: 'green', paddingTop: 12 }}>Success! Your review has been received.</Typography>
          } */}
        </Container>
      </Grid>
       
      {/* FOR TESTING VALUES, DELETE WHEN NOT NEEDED
      <Typography>
        {enteredAge}, {selectedPronouns}, {selectedSex}, {enteredBudget}, {enteredLocation}, {cleanLevel}, {noiseLevel}, {hasPet}
        {hobbyList}
      </Typography> */}

    </div >
  );
}

const Age = (props) => {
  // const [errMessage, setErrMessage] = React.useState('');

  // React.useEffect(() => {
  //   if (props.isEmpty && props.submit) {
  //     setErrMessage("Please enter your review title.");
  //   };
  // }, [props.isEmpty, props.submit])

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel style={{ paddingBottom: 12 }}>What is your age?</FormLabel>
        <TextField
          id="single-input"
          size="small"
          placeholder="Enter your age"
          variant='outlined'
          onChange={props.onType}
        />
      </FormControl>
    </div>
  )
}

const Sex = (props) => {
  const sex = ['Female', 'Male', 'Other'];

  return (
    <FormControl fullWidth>
      <FormLabel>What is your sex?</FormLabel>
      <RadioGroup
        onChange={props.onSelect}
      // error={(props.isEmpty && props.submit)}
      >
        {sex.map((sex) => (
          <FormControlLabel value={sex} control={<Radio color="primary" />} label={sex} />
        ))}
      </RadioGroup>
      {/* <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText> */}
    </FormControl>
  )
}

const Pronouns = (props) => {
  // const [errMessage, setErrMessage] = React.useState('');
  const pronouns = ['She/her', 'He/him', 'They/them'];

  // React.useEffect(() => {
  //   if (props.isEmpty && props.submit) {
  //     setErrMessage("Please select the rating.");
  //   };
  // }, [props.isEmpty, props.submit])

  return (
    <FormControl fullWidth>
      <FormLabel>What are your pronouns?</FormLabel>
      <RadioGroup
        row
        onChange={props.onSelect}
      // error={(props.isEmpty && props.submit)}
      >
        {pronouns.map((pronouns) => (
          <FormControlLabel value={pronouns} control={<Radio color="primary" />} label={pronouns} />
        ))}
      </RadioGroup>
      {/* <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText> */}
    </FormControl>
  )
}

const Budget = (props) => {
  // const [errMessage, setErrMessage] = React.useState('');

  // React.useEffect(() => {
  //   if (props.isEmpty && props.submit) {
  //     setErrMessage("Please enter your review title.");
  //   };
  // }, [props.isEmpty, props.submit])

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel style={{ paddingBottom: 12 }}>What's your monthly max budget?</FormLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          size="small"
          placeholder="Enter an approximate number"
          variant='outlined'
          onChange={props.onType}
        />
      </FormControl>
    </div>
  )
}

const Location = (props) => {
  // const [errMessage, setErrMessage] = React.useState('');

  // React.useEffect(() => {
  //   if (props.isEmpty && props.submit) {
  //     setErrMessage("Please enter your review title.");
  //   };
  // }, [props.isEmpty, props.submit])

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel style={{ paddingBottom: 12 }}>In which city are you looking for roommates to live with?</FormLabel>
        <TextField
          id="single-input"
          size="small"
          placeholder="Enter a city"
          variant='outlined'
          onChange={props.onType}
          helperText="Ex. Seattle"
        />
      </FormControl>
    </div>
  )
}

const Cleanliness = (props) => {

  const levels = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel style={{ paddingBottom: 12 }}>How tidy are you with your space? Rank your level of cleanliness.</FormLabel>
        <Stack spacing={4} direction="row" alignItems="center" paddingBottom={4}>
          <Typography variant="body2" align="center">Not very clean</Typography>
          <Slider
            onChange={props.onChange}
            defaultValue={5}
            step={1}
            min={1}
            max={10}
            marks={levels}
          />
          <Typography variant="body2" align="center">Extremely clean</Typography>
        </Stack>
      </FormControl>
    </div>
  );
}

const NoiseLevel = (props) => {

  const levels = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel style={{ paddingBottom: 12 }}>How much noise do you typically make at home? Rank your level of noise.</FormLabel>
        <Stack spacing={4} direction="row" alignItems="center" paddingBottom={4}>
          <Typography variant="body2" align="center">Absolute silence</Typography>
          <Slider
            onChange={props.onChange}
            defaultValue={5}
            step={1}
            min={1}
            max={10}
            marks={levels}
          />
          <Typography variant="body2" align="center">Constant noise</Typography>
        </Stack>
      </FormControl>
    </div>
  );
}

const Pets = (props) => {
  const options = ['Yes', 'No'];

  return (
    <FormControl fullWidth>
      <FormLabel>Do you have any pets?</FormLabel>
      <RadioGroup
        row
        onChange={props.onSelect}
      // error={(props.isEmpty && props.submit)}
      >
        {options.map((options) => (
          <FormControlLabel value={options} control={<Radio color="primary" />} label={options} />
        ))}
      </RadioGroup>
      {/* <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText> */}
    </FormControl>
  )
}

const Hobbies = (props) => {
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
      <FormControl fullWidth>
        <FormLabel>Let us know some some of your hobbies are! Select as many as you want.</FormLabel>
        <Select
          id="demo-multiple-chip"
          multiple
          value={props.userHobbies}
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
      </FormControl>
    </div>
  );
}

export default Profile;