import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../index.css';

const Login = () => {

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

    const validate = () => {
        setEmailError(false)
        setPasswordError(false)
        
        setEmailErrorMsg('')
        setPasswordErrorMsg('')

        if (enteredEmail === '') {
            setEmailError(true)
            setEmailErrorMsg('Please enter your email')
        }

        if (enteredPassword === '') {
            setPasswordError(true)
            setPasswordErrorMsg('Please enter your password')
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
                    <EmailField handleEmailChange={handleEmailChange} emailError={emailError} emailErrorMsg={emailErrorMsg}></EmailField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Password:</label>
                    <PasswordField handlePasswordChange={handlePasswordChange} passwordError={passwordError} passwordErrorMsg={passwordErrorMsg}></PasswordField>
                </div>
                <Button onClick={validate} style={{ padding: "1rem", marginTop: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#2563EB", color: "#ffffff", width: "100%", borderWidth: "1px", borderColor: "#3B82F6" }} variant="contained" disableElevation>Login</Button>
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
                />
            </form>
        </div>
    )
}

export default Login;