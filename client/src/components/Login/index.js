import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../index.css';
import { useRef } from 'react';
import { useAuth } from '../Firebase/context';

const Login = () => {

    const emailRef = useRef()
    const passwordRef= useRef()
    const { login } = useAuth()
    const history = useHistory()


    const [enteredEmail, setEnteredEmail] = React.useState('');
    const [enteredPassword, setEnteredPassword] = React.useState('');

    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('');

    const handleEmailChange = (event) => {
        setEnteredEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setEnteredPassword(event.target.value);
    }

    // const validate = () => {
    //     setEmailError(false)
    //     setPasswordError(false)
        
    //     setEmailErrorMsg('')
    //     setPasswordErrorMsg('')

    //     if (enteredEmail === '') {
    //         setEmailError(true)
    //         setEmailErrorMsg('Please enter your email')
    //     }

    //     if (enteredPassword === '') {
    //         setPasswordError(true)
    //         setPasswordErrorMsg('Please enter your password')
    //     }
    // }

    async function handleSubmit() {
        let errors = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (enteredEmail === '') { //tests field is not empty
            setEmailError(true)
            setEmailErrorMsg('Please enter your email')
            errors = true;
        } else if (!emailRegex.test(enteredEmail)) { //tests if email was in valid form
            setEmailError(true)
            setEmailErrorMsg('Please enter a valid email address')
            errors = true;
        } else {
            setEmailError(false)
            setEmailErrorMsg('')
        }
    
        if (enteredPassword === '') { //tests field is not empty
            setPasswordError(true)
            setPasswordErrorMsg('Please enter a password')
            errors = true;
        } else if (enteredPassword.length < 6) { //tests password is at least 6 characters long per Google Firebase
            setPasswordError(true)
            setPasswordErrorMsg('Password must be at least 6 characters long')
            errors = true;
        } else {
            setPasswordError(false)
            setPasswordErrorMsg('')
        }

        if (errors) {
            return;
        }
    
        try {
            await login(emailRef.current.value, passwordRef.current.value) //logs in to already created account (see context.js)
            history.push('/home') //navigate to landing page once successfully signed in
        } catch {
            setEmailError(true);
            setEmailErrorMsg('Entered an incorrect email or password or don\'t have an account');
            setPasswordError(true);
            setPasswordErrorMsg('Entered an incorrect email or password or don\'t have an account');
        }
    }

    return (
        <div>
            <Typography className='title-text' variant="h3" noWrap>
                <b>Login to Zoommates</b>
            </Typography>
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                <div className='div-form-style'>
                    <label className='label-text'>Email Address:</label>
                    <EmailField handleEmailChange={handleEmailChange} emailError={emailError} emailErrorMsg={emailErrorMsg} emailRef={emailRef}></EmailField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Password:</label>
                    <PasswordField handlePasswordChange={handlePasswordChange} passwordError={passwordError} passwordErrorMsg={passwordErrorMsg} passwordRef={passwordRef}></PasswordField>
                </div>
                <Button onClick={handleSubmit} style={{ padding: "1rem", marginTop: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#2563EB", color: "#ffffff", width: "100%", borderWidth: "1px", borderColor: "#3B82F6" }} variant="contained" disableElevation>Login</Button>
                <Typography align='center'>
                    Don't have an account yet? <Link to="/signup">Sign up</Link>
                </Typography>
            </div>
        </div>
    )
}

export function EmailField(props) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    fullWidth
                    type={'email'}
                    onChange={props.handleEmailChange}
                    error={props.emailError}
                    helperText={props.emailErrorMsg}
                    inputRef={props.emailRef} // ADDED inputRef to get the value when we submit the form (check EmailField in return as well)
                />
            </form>
        </div>
    )
}

export function PasswordField(props) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    fullWidth
                    type={'password'}
                    onChange={props.handlePasswordChange}
                    error={props.passwordError}
                    helperText={props.passwordErrorMsg}
                    inputRef={props.passwordRef}
                />
            </form>
        </div>
    )
}

export default Login;