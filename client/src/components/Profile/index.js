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
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import NavBar from '../Navigation/NavBar';

const Profile = () => {

  //defining states
  const [enteredAge, setAge] = React.useState('');
  const [selectedSex, setSex] = React.useState('');
  const [selectedPronouns, setPronouns] = React.useState('');
  const [enteredBudget, setBudget] = React.useState('');

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

  return (
    <div>
      <NavBar />

      <Grid marginTop={2}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterTop color="inherit" noWrap align='center' paddingBottom={1}>
            Create your profile
          </Typography>
          <Typography variant="body1" color="inherit" noWrap align='center'>
            Tell us about you! Fill out this questionnaire about yourself to set up your profile.
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
          <Typography variant="h5" color="inherit" noWrap align='left'>
            2. Housing Details
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='age'>
              <Budget
                onType={handleBudgetInput}
                userBudget={enteredBudget}
              />
            </Grid>

            <Grid item id='age'>

            </Grid>

            <Grid item id='age'>

            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid marginTop={8}>
        <Container maxWidth="sm" margin={16}>
          <Typography variant="h5" color="inherit" noWrap align='left'>
            3. Lifestyle
          </Typography>

          <Grid container wrap="nowrap" spacing={4} direction="column">
            <Grid item id='age'>

            </Grid>

            <Grid item id='age'>

            </Grid>

            <Grid item id='age'>

            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Typography>
        {enteredAge}, {selectedPronouns}, {selectedSex}, {enteredBudget}
      </Typography>
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
  // const [errMessage, setErrMessage] = React.useState('');
  const sex = ['Female', 'Male', 'Other'];

  // React.useEffect(() => {
  //   if (props.isEmpty && props.submit) {
  //     setErrMessage("Please select the rating.");
  //   };
  // }, [props.isEmpty, props.submit])

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


export default Profile;