import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import NavBar from '../Navigation/NavBar';
import { Container, Stack } from '@mui/system';

const Matches = () => {

    //for dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const people = [
        { profileID: 1, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 2, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 3, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 4, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 5, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 6, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" }
    ]

    //stateful list
    const [profiles, setVisibleProfiles] = React.useState(people);

    const handleRemoveProfile = (person) => {
        const newProfiles = profiles.filter(
            (people) = person.profileID !== people.profileID);
        setVisibleProfiles(newProfiles);
    };

    const handleStarred = (event) => {
        starred = profiles.starred;
        setStarred(!profiles.starred);
        profiles.starred = starred;
    }

    const [starred, setStarred] = React.useState(people.starred);

    // const handleChangeActive = () => {
    //     setActive((starred) => {
    //         return !starred;
    //     });
    // };

    // const reset = () => { // function that resets submit and valid states
    //     setStarred(false);
    //   }

    return (
        <div>
            <NavBar />
            <Grid>
                <Typography variant="h3" marginTop={2} gutterTop color="inherit" noWrap align='center' paddingBottom={1}>
                    Here Are Your Matches!
                </Typography>
                <Container>
                    <Stack direction="row" spacing={4} marginTop={4}>
                        <Button variant="outlined" startIcon={<RefreshIcon />}>
                            Refresh
                        </Button>
                        <Button variant="contained" component={Link} to="/starred">
                            View Starred
                        </Button>
                    </Stack>

                    <Grid container marginTop={4} spacing={4} direction="row">
                        {profiles.slice(0, 5).map((profile) => {
                            return (
                                <MatchProfile
                                    profile={profile}
                                    onClick={handleClickOpen}
                                    open={open}
                                    onClose={handleClose}
                                />
                            );
                        }
                        )}
                    </Grid>
                </Container>

            </Grid>
        </div>

    );
}

const MatchProfile = (props) => {
    const [starred, setStarred] = React.useState(false);

    const handleStarred = (event) => {
        starred = props.profile.starred;
        setStarred(!props.profiles.starred);
        props.profiles.starred = starred;
    }

    return (
        <div>
            <Grid item>
                <Card sx={{ maxWidth: 200 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={props.profile.photo}
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.profile.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.profile.sex} | {props.profile.age}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" onClick={props.onClick}>View Profile</Button>

                        <Dialog open={props.open} onClose={props.onClose} fullWidth='sm' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1 }}  >
                            <DialogTitle marginBottom={4}>Match Profile Details</DialogTitle >
                            <DialogContent>
                                <DialogContentText spacing={4}>
                                    <Stack direction='row' spacing={4}>
                                        <Avatar
                                            alt="Andre Laroque"
                                            sx={{ width: 240, height: 240 }}
                                            src={props.profile.photo} />
                                        <div>
                                            <Typography variant='h4'>{props.profile.name}</Typography>
                                            <Typography><b>Sex:</b> {props.profile.sex}</Typography>
                                            <Typography><b>Age:</b> {props.profile.age}</Typography>
                                            <Typography><b>Age:</b> {props.profile.age}</Typography>
                                        </div>
                                    </Stack>
                                    <Typography><b>Sex:</b> {props.profile.sex}</Typography>
                                    <Typography><b>Age:</b> {props.profile.age}</Typography>
                                    <Typography><b>Age:</b> {props.profile.age}</Typography>

                                </DialogContentText>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={props.onClose}>Back to Matches</Button>
                            </DialogActions>
                        </Dialog>

                        <IconButton aria-label="add to favorites" onStar={handleStarred}>
                            {(props.profile.starred)
                                ? <StarIcon color="primary" />
                                : <StarBorderIcon />
                            }
                        </IconButton>
                        <IconButton aria-label="reject">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}

export default Matches;