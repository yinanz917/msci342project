import * as React from 'react';
import Typography from '@mui/material/Typography';
import '../../index.css';
import { useAuth } from '../Firebase/context';
import NavBar from '../Navigation/NavBar';
import { Snackbar, Divider, Container, Stack, Avatar, Button, Grid, TextField } from '@mui/material';
import MuiAlert from '@mui/material/Alert';


const serverURL = "";

const Account = () => {
    const { currentUser } = useAuth()
    const email = currentUser.email
    const [accountInfo, setAccountInfo] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);
    const [submit, setSubmit] = React.useState(false);

    // for snack bar
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    React.useEffect(() => {
        getAccountInfo();
    }, []);

    const getAccountInfo = () => {
        callApiGetAccountInfo()
            .then(res => {
                console.log("callApiGetAccountInfo returned: ", res)
                var parsed = JSON.parse(res.express);
                console.log("callApiGetAccountInfo() parsed: ", parsed)
                setAccountInfo(parsed);
            });
    }

    //API to get first name, last name, and photo
    const callApiGetAccountInfo = async () => {
        const url = serverURL + "/api/getAccountInfo";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    //API to get new photo
    const callApiUploadProfilePhoto = async () => {
        const url = serverURL + "/api/uploadProfilePhoto";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                photo: photo
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const handleFileChange = (event) => {
        setPhoto(event.target.value);
        setSubmit(false);
    }

    const handleUploadPhoto = () => {
        callApiUploadProfilePhoto()
            .then(() => {
                getAccountInfo();
            })
            .catch((error) => {
                console.log(error);
            });
            
        setOpen(true);
        setSubmit(true);
    }

    return (
        <div>
            <NavBar />

            <Grid marginY={4}>
                <Container maxWidth="sm">
                    <Typography className='title-text' variant="h3">
                        Account
                    </Typography>

                    <Stack direction='row' spacing={4} marginY={4}>
                        {accountInfo && (
                            <>
                                <Avatar
                                    alt={accountInfo[0].firstName}
                                    sx={{ width: 240, height: 240 }}
                                    src={accountInfo[0].photo}
                                />
                                <Stack>
                                    <Typography variant="overline" display="block" paddingTop={2}>Email</Typography>
                                    <Typography>{email}</Typography>
                                    <Typography variant="overline" display="block" paddingTop={2}>First Name</Typography>

                                    <Typography>{accountInfo[0].firstName}</Typography>
                                    <Typography variant="overline" display="block" paddingTop={2}>Last Name</Typography>

                                    <Typography>{accountInfo[0].lastName}</Typography>
                                </Stack>
                            </>
                        )}
                    </Stack>

                    <Divider />
                    <Grid container direction="column" spacing={2} marginY={4} >
                        <Grid item>
                            <Typography variant='h6'>Want to upload a profile photo?</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                placeholder="Enter link to profile photo"
                                variant="outlined"
                                helperText="You may get this link from any platform for any photo online."
                                size="small"
                                fullWidth
                                onChange={handleFileChange} />
                        </Grid>
                        <Grid item marginTop={2}>
                            <Button width="24px" variant="contained" color="primary" onClick={handleUploadPhoto}>Add Photo</Button>
                            {(submit) &&
                                <div>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                            Success! Your profile picture has been uploaded.
                                        </Alert>
                                    </Snackbar>
                                </div>
                            }
                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </div >
    )

}

export default Account;