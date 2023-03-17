import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../index.css';
import { EmailField, PasswordField } from '../Login';

const serverURL = "";

const SignUp = () => {

    const [enteredFirstName, setFirstName] = React.useState('');
    const [enteredLastName, setLastName] = React.useState('');
    const [enteredEmail, setEnteredEmail] = React.useState('');
    const [enteredPassword, setEnteredPassword] = React.useState('');
    const [reenteredPassword, setReenteredPassword] = React.useState('');

    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [reenteredPasswordError, setReenteredPasswordError] = React.useState(false);

    const [firstNameErrorMsg, setFirstNameErrorMsg] = React.useState('');
    const [lastNameErrorMsg, setLastNameErrorMsg] = React.useState('');
    const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('');
    const [reenteredPasswordErrorMsg, setReenteredPasswordErrorMsg] = React.useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEnteredEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setEnteredPassword(event.target.value);
    }

    const handleReenteredPasswordChange = (event) => {
        setReenteredPassword(event.target.value);
    }

    const callApiAddUser = async () => {
        const url = serverURL + "/api/addUser";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: enteredFirstName,
                lastName: enteredLastName,
                email: enteredEmail,
                pw: enteredPassword,
                stat: "active"
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const validate = () => {
        setFirstNameError(false)
        setLastNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setReenteredPasswordError(false)

        setFirstNameErrorMsg('')
        setLastNameErrorMsg('')
        setEmailErrorMsg('')
        setPasswordErrorMsg('')
        setReenteredPasswordErrorMsg('')

        // TODO: If fields are not empty and setEmailError == false, then callApiAddUser
        // TODO: Create logic to test if enteredEmail is a valid email address
        if (enteredFirstName != '' && enteredLastName != '' && enteredEmail != '' && enteredPassword != '' && reenteredPassword != '') {
            callApiAddUser();
        }

        if (enteredFirstName === '') {
            setFirstNameError(true)
            setFirstNameErrorMsg('Please enter your first name')
        }

        if (enteredLastName === '') {
            setLastNameError(true)
            setLastNameErrorMsg('Please enter your last name')
        }

        if (enteredEmail === '') {
            setEmailError(true)
            setEmailErrorMsg('Please enter your email')
        }

        if (enteredPassword === '') {
            setPasswordError(true)
            setPasswordErrorMsg('Please enter a password')
        }

        if (reenteredPassword === '') {
            setReenteredPasswordError(true)
            setReenteredPasswordErrorMsg('Please re-enter your password')
        }

        if (enteredPassword != reenteredPassword) {
            setReenteredPasswordError(true)
            setReenteredPasswordErrorMsg('The password you re-entered does not match')
        }

    }

    return (
        <div>
            <Typography className='title-text' variant="h3" noWrap>
                <b>Sign up for Zoommates</b>
            </Typography>
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                <div className='div-form-style'>
                    <label className='label-text'>First Name:</label>
                    <NameField handleNameChange={handleFirstNameChange} nameError={firstNameError} nameErrorMsg={firstNameErrorMsg}></NameField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Last Name:</label>
                    <NameField handleNameChange={handleLastNameChange} nameError={lastNameError} nameErrorMsg={lastNameErrorMsg}></NameField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Email Address:</label>
                    <EmailField handleEmailChange={handleEmailChange} emailError={emailError} emailErrorMsg={emailErrorMsg}></EmailField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Password:</label>
                    <PasswordField handlePasswordChange={handlePasswordChange} passwordError={passwordError} passwordErrorMsg={passwordErrorMsg}></PasswordField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Re-enter Password:</label>
                    <PasswordField handlePasswordChange={handleReenteredPasswordChange} passwordError={reenteredPasswordError} passwordErrorMsg={reenteredPasswordErrorMsg}></PasswordField>
                </div>
                <Button onClick={validate} style={{ padding: "1rem", marginTop: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#2563EB", color: "#ffffff", width: "100%", borderWidth: "1px", borderColor: "#3B82F6" }} variant="contained" disableElevation>Sign Up</Button>
                <Typography align='center'>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </div>
        </div>
    )
}

function NameField(props) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    fullWidth
                    type={'text'}
                    onChange={props.handleNameChange}
                    error={props.nameError}
                    helperText={props.nameErrorMsg}
                />
            </form>
        </div>
    )
}

export default SignUp;