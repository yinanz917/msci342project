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

const ZoommateQuestionnaire = () => {

    //defining states
    const [enteredMaxAge, setMaxAge] = React.useState('');
    const [enteredMinAge, setMinAge] = React.useState('');

    const [selectedSex, setSex] = React.useState('');
  
    const [cleanLevel, setCleanLevel] = React.useState('');
    const [noiseLevel, setNoiseLevel] = React.useState('');
    const [shareLevel, setShareLevel] = React.useState('');
    const [socialLevel, setSocialLevel] = React.useState('');
    const [guestLevel, setGuestLevel] = React.useState('');
  
    const [submit, setSubmit] = React.useState(false);
    const [allValid, setValid] = React.useState(false);
  
    const handleMaxAgeInput = (event) => {
      reset();
      setMaxAge(event.target.value);
    }

    const handleMinAgeInput = (event) => {
        reset();
        setMinAge(event.target.value);
      }
  
    const handleSexSelection = (event) => {
      reset();
      setSex(event.target.value);
    }
  
    const handleCleanLevel = (event) => {
      reset();
      setCleanLevel(event.target.value);
    }
  
    const handleNoiseLevel = (event) => {
      reset();
      setNoiseLevel(event.target.value);
    }

    const handleShareLevel = (event) => {
      reset();
      setShareLevel(event.target.value);
    }

    const handleSocialLevel = (event) => {
        reset();
        setSocialLevel(event.target.value);
      }
  
      const handleGuestLevel = (event) => {
        reset();
        setGuestLevel(event.target.value);
      }
  
    // Submission functions @yinan
    const isEmpty = (input) => (input === '');
  
    const reset = () => { // function that resets submit and valid states
      setSubmit(false);
      setValid(false);
    }
  
    const handleSubmit = (event) => {
      setSubmit(true);
  
      setMyQuestions();
  
      if (!(isEmpty(enteredMaxAge) ||
        isEmpty(enteredMinAge) ||
        isEmpty(selectedSex) ||
        isEmpty(cleanLevel) ||
        isEmpty(noiseLevel) ||
        isEmpty(shareLevel) ||
        isEmpty(socialLevel) ||
        isEmpty(guestLevel))) {
        setValid(true); // if all fields are not empty, sets allValid to true
      }
    }
  
 
    const setMyQuestions = async () => {
      callApiSetMyQuestions()
        .then(res => {
          console.log("callApiSetMyQuestions returned: ", res)
          var parsed = JSON.parse(res.express);
          console.log("callApiSetMyQuestions parsed: ", parsed[0])
        });
    }
    
  
    const callApiSetMyQuestions = async () => {
      const url = serverURL + "/api/setMyQuestions";
      console.log(url);
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify({
          AgeMax: enteredMaxAge,
          AgeMin: enteredMinAge,
          ZMSex: selectedSex,
          Clean: cleanLevel,
          Noise: noiseLevel,
          Share: shareLevel,
          Social: socialLevel,
          Guest: guestLevel
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
              Fill out the Questionnaire
            </Typography>
            <Typography variant="body1" color="inherit" noWrap align='center'>
              We will use your responses to recommend Zoommates!
            </Typography>
          </Container>
        </Grid>
  
        <Grid marginTop={8} id='Basic Info'>
          <Container maxWidth="sm" margin={16}>
            <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
              1. Basic Info
            </Typography>
  
            <Grid container wrap="nowrap" spacing={4} direction="column">
              <Grid item id='maxage'>
                <MaxAge
                  onType={handleMaxAgeInput}
                  userAge={enteredMaxAge}
                  isEmpty={isEmpty(enteredMaxAge)}
                  submit={submit}
                />
              </Grid>
              
              <Grid item id='minage'>
                <MinAge
                  onType={handleMinAgeInput}
                  userAge={enteredMinAge}
                  isEmpty={isEmpty(enteredMinAge)}
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
  
            </Grid>
          </Container>
        </Grid>
  
        <Grid marginTop={8} id='Lifestyle'>
          <Container maxWidth="sm" margin={16}>
            <Typography variant="h5" color="inherit" noWrap align='left' paddingBottom={2}>
              2. Lifestyle
            </Typography>
  
            <Grid container wrap="nowrap" spacing={4} direction="column">
              <Grid item id='cleanliness'>
                <Cleanliness
                  onChange={handleCleanLevel}
                  userCleanLevel={cleanLevel}
                  isEmpty={isEmpty(cleanLevel)}
                  submit={submit}
                />
              </Grid>
  
              <Grid item id='noise-level'>
                <NoiseLevel
                  onChange={handleNoiseLevel}
                  userNoiseLevel={noiseLevel}
                  isEmpty={isEmpty(noiseLevel)}
                  submit={submit}
                />
              </Grid>

              <Grid item id='share-level'>
                <ShareLevel
                  onChange={handleShareLevel}
                  userShareLevel={shareLevel}
                  isEmpty={isEmpty(shareLevel)}
                  submit={submit}
                />
              </Grid>
  
              <Grid item id='social-level'>
                <SocialLevel
                  onChange={handleSocialLevel}
                  userSocialLevel={socialLevel}
                  isEmpty={isEmpty(socialLevel)}
                  submit={submit}
                />
              </Grid>

              <Grid item id='guest-level'>
                <GuestLevel
                  onChange={handleGuestLevel}
                  userGuestLevel={guestLevel}
                  isEmpty={isEmpty(guestLevel)}
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
              Submit Questionnaire
            </Button>
            {(submit && allValid) && // shows succcess state if submitted and all valid
              <Typography variant="subtitle2" display="block" style={{ color: 'green', paddingTop: 12 }}>Success! You've completed your questionnaire.</Typography>
            }
          </Container>
        </Grid>
      </div >
    );
  }
  
  const MaxAge = (props) => {
    const errMessage = 'Please enter your age.';
  
    return (
      <div>
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
          <FormLabel style={{ paddingBottom: 12 }}>What is the maximum age for your Zoommate?</FormLabel>
          <TextField
            id="single-input"
            size="small"
            placeholder="Maximum age"
            variant='outlined'
            onChange={props.onType}
          />
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    )
  }

  const MinAge = (props) => {
    const errMessage = 'Please enter your age.';
  
    return (
      <div>
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
          <FormLabel style={{ paddingBottom: 12 }}>What is the minimum age for your Zoommate?</FormLabel>
          <TextField
            id="single-input"
            size="small"
            placeholder="Minimum age"
            variant='outlined'
            onChange={props.onType}
          />
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    )
  }
  
  const Sex = (props) => {
    const sex = ['Female only', 'Male only', 'All sexes'];
    const errMessage = 'Please enter your sex.';
  
    return (
      <FormControl fullWidth error={(props.isEmpty && props.submit)}>
        <FormLabel>With which sexes can we match you?</FormLabel>
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
  
  const Cleanliness = (props) => {
    const errMessage = 'Please indicate a level.';
  
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
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
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
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    );
  }
  
  const NoiseLevel = (props) => {
    const errMessage = 'Please indicate a level.';
  
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
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
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
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    );
  }

  const ShareLevel = (props) => {
    const errMessage = 'Please indicate a level.';
  
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
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
          <FormLabel style={{ paddingBottom: 12 }}>How comfortable are you with sharing? (Ex: appliances, common foods)</FormLabel>
          <Stack spacing={4} direction="row" alignItems="center" paddingBottom={4}>
            <Typography variant="body2" align="center">No sharing</Typography>
            <Slider
              onChange={props.onChange}
              defaultValue={5}
              step={1}
              min={1}
              max={10}
              marks={levels}
            />
            <Typography variant="body2" align="center">Share almost anything</Typography>
          </Stack>
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    );
  }

  const SocialLevel = (props) => {
    const errMessage = 'Please indicate a level.';
  
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
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
          <FormLabel style={{ paddingBottom: 12 }}>How sociable do you want to be with your Zoommate?</FormLabel>
          <Stack spacing={4} direction="row" alignItems="center" paddingBottom={4}>
            <Typography variant="body2" align="center">Limited Interactions</Typography>
            <Slider
              onChange={props.onChange}
              defaultValue={5}
              step={1}
              min={1}
              max={10}
              marks={levels}
            />
            <Typography variant="body2" align="center">Friendship</Typography>
          </Stack>
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    );
  }

  const GuestLevel = (props) => {
    const errMessage = 'Please indicate a level.';
  
    const levels = [
      { value: 1, label: '0 - 1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
      { value: 10, label: '10 +' },
    ];
  
    return (
      <div>
        <FormControl fullWidth error={(props.isEmpty && props.submit)}>
          <FormLabel style={{ paddingBottom: 12 }}>On average, how many guests will you have in a week?</FormLabel>
          <Stack spacing={4} direction="row" alignItems="center" paddingBottom={4}>
            <Typography variant="body2" align="center">No guests</Typography>
            <Slider
              onChange={props.onChange}
              defaultValue={5}
              step={1}
              min={1}
              max={10}
              marks={levels}
            />
            <Typography variant="body2" align="center">Party Central</Typography>
          </Stack>
          <FormHelperText>{(props.submit && props.isEmpty) && (errMessage)}</FormHelperText>
        </FormControl>
      </div>
    );
  }
  
  
  export default ZoommateQuestionnaire;