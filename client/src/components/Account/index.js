import * as React from 'react';
import Typography from '@mui/material/Typography';
import '../../index.css';
import { useAuth } from '../Firebase/context';
import NavBar from '../Navigation/NavBar';
import { Avatar, Button, Grid, TextField } from '@mui/material';

const serverURL = "";

const Account = () => {
    const { currentUser } = useAuth()
    const email = currentUser.email
    const [accountInfo, setAccountInfo] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);

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
    }

    const handleUploadPhoto = () => {
        callApiUploadProfilePhoto()
            .then(() => {
                getAccountInfo();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <NavBar />
            <Typography className='title-text' variant="h3" noWrap>
                <b>Account</b>
            </Typography>

            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                {accountInfo && (
                    <>
                        <Avatar
                            alt={accountInfo[0].firstName}
                            sx={{ width: 240, height: 240 }}
                            src={accountInfo[0].photo}
                        />
                        <p><b>Email:</b> {email}</p>
                        <p><b>First Name:</b> {accountInfo[0].firstName}</p>
                        <p><b>Last Name:</b> {accountInfo[0].lastName}</p>
                        <div style={{ marginTop: '20px' }}>
                            {/* <input type="text" placeholder="Enter link to profile photo" onChange={handleFileChange} /> */}
                            <TextField label="Enter link to profile photo" variant="outlined" size="small" onChange={handleFileChange} />
                            <Button variant="contained" color="primary" onClick={handleUploadPhoto}>Add Profile Photo</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )

}

export default Account;