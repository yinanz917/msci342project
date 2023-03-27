import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../index.css';
import { EmailField, PasswordField } from '../Login';
import { useRef, useState } from 'react';
import { useAuth } from '../Firebase/context';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { auth } from "../Firebase/firebase";
import { collection, addDoc, set } from 'firebase/firestore';
import app from "../Firebase/firebase";
import db from "../Firebase/firebase";

const serverURL = "";

const SignUp = () => {

    const db=firebase.firestore();
    const firstRef = useRef()
    const lastRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const history = useHistory()

    const usersCollection = firebase.firestore().collection('users')
    const newUser = {
        firstRef: firstRef,
        lastRef: lastRef,
        emailRef: emailRef
    }

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

    async function handleSubmit() {
        let errors = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (enteredFirstName === '') { //tests field is not empty
            setFirstNameError(true)
            setFirstNameErrorMsg('Please enter your first name')
            errors = true;
        } else {
            setFirstNameError(false)
            setFirstNameErrorMsg('')
        }
    
        if (enteredLastName === '') { //tests field is not empty
            setLastNameError(true)
            setLastNameErrorMsg('Please enter your last name')
            errors = true;
        } else {
            setLastNameError(false)
            setLastNameErrorMsg('')
        }
    
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
    
        if (reenteredPassword === '') { //tests field is not empty
            setReenteredPasswordError(true)
            setReenteredPasswordErrorMsg('Please re-enter your password')
            errors = true;
        } else if (passwordRef.current.value !== passwordConfirmRef.current.value) { //tests password and reenterd password match
            setReenteredPasswordError(true);
            setReenteredPasswordErrorMsg('The password you re-entered does not match');
            errors = true;
        } else {
            setReenteredPasswordError(false)
            setReenteredPasswordErrorMsg('')
        }
    
        if (errors) {
            return;
        }

          try {
            await signup(emailRef.current.value, passwordRef.current.value)
              .then(async (userCredential) => {
                console.log("New user UID:", userCredential.user.uid);
                console.log("Email:", emailRef.current.value);
                var lol = db.collection("users").doc()
                console.log(lol)
                lol.set({
                }).then(a=>console.log("pony", a));
                console.log('User data added to Firestore.');
                // db.collection("usersChats").add({     
                // });
                console.log('run it back');
              });
          
            await callApiAddUser();
            history.push('/home');
          } catch (error) {
            console.log('Error adding user:', error);
            setEmailError(true);
            setEmailErrorMsg('An account with this email already exists');
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
                    <NameField handleNameChange={handleFirstNameChange} nameError={firstNameError} nameErrorMsg={firstNameErrorMsg} nameRef={firstRef}></NameField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Last Name:</label>
                    <NameField handleNameChange={handleLastNameChange} nameError={lastNameError} nameErrorMsg={lastNameErrorMsg} nameRef={lastRef}></NameField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Email Address:</label>
                    <EmailField handleEmailChange={handleEmailChange} emailError={emailError} emailErrorMsg={emailErrorMsg} emailRef={emailRef}></EmailField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Password:</label>
                    <PasswordField handlePasswordChange={handlePasswordChange} passwordError={passwordError} passwordErrorMsg={passwordErrorMsg} passwordRef={passwordRef}></PasswordField>
                </div>
                <div className='div-form-style'>
                    <label className='label-text'>Re-enter Password:</label>
                    <PasswordField handlePasswordChange={handleReenteredPasswordChange} passwordError={reenteredPasswordError} passwordErrorMsg={reenteredPasswordErrorMsg} passwordRef={passwordConfirmRef}></PasswordField>
                </div>
                <Button onClick={handleSubmit} style={{ padding: "1rem", marginTop: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#2563EB", color: "#ffffff", width: "100%", borderWidth: "1px", borderColor: "#3B82F6" }} variant="contained" disableElevation>Sign Up</Button>
                <Typography align='center'>
                    Already have an account? <Link to="/">Login</Link>
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
                    inputRef={props.nameRef}
                />
            </form>
        </div>
    )
}

export default SignUp;