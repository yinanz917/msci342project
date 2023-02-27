import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
}

const SignUp = () => {

    return (
        <div>
            <Typography variant="h3" color="inherit" noWrap align='center'>
                Sign up for Zoommates!
            </Typography>
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                <form>
                    <div style={{ display: "flex", paddingTop: "0.5rem", paddingBottom: "0.5rem", flexDirection: "column" }}>
                        <label style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "500" }}>First Name: </label>
                        <input style={{ padding: "0.75rem", borderWidth: "1px" }} type='text' />
                    </div>
                    <div style={{ display: "flex", paddingTop: "0.5rem", paddingBottom: "0.5rem", flexDirection: "column" }}>
                        <label style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "500" }}>Last Name: </label>
                        <input style={{ padding: "0.75rem", borderWidth: "1px" }} type='text' />
                    </div>
                    <div style={{ display: "flex", paddingTop: "0.5rem", paddingBottom: "0.5rem", flexDirection: "column" }}>
                        <label style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "500" }}>Email Address: </label>
                        <input style={{ padding: "0.75rem", borderWidth: "1px" }} type='email' />
                    </div>
                    <div style={{ display: "flex", paddingTop: "0.5rem", paddingBottom: "0.5rem", flexDirection: "column" }}>
                        <label style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "500" }}>Password: </label>
                        <input style={{ padding: "0.75rem", borderWidth: "1px" }} type='password' />
                    </div>
                    <div style={{ display: "flex", paddingTop: "0.5rem", paddingBottom: "0.5rem", flexDirection: "column" }}>
                        <label style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "500" }}>Re-enter Password: </label>
                        <input style={{ padding: "0.75rem", borderWidth: "1px" }} type='password' />
                    </div>
                    <Button style={{ padding: "1rem", marginTop: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#2563EB", color: "#ffffff", width: "100%", borderWidth: "1px", borderColor: "#3B82F6" }} variant="contained" disableElevation>Sign Up</Button>
                </form>
                <Typography align='center'>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </div>
        </div>
    );
}

export default SignUp;