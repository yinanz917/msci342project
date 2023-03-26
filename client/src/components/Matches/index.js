import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
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
import TextField from '@mui/material/TextField';

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

    // @andre directly pull from database
    const initialProfiles = [
        { profileID: 1, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 2, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 3, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 4, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 5, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { profileID: 6, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" }
    ]

    const initialReviews = [
        { name: "Vyomesh Iyengar", photo: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1683158400&v=beta&t=Fiy4Lb2knxD6Ka-WsfsC5PJJH50YCfL1N_YGgTe7oF4", score: "5.0", review: "Amazing roommate, was very clean and always helped out with the dishes!" },
        { name: "Andre Larocque", photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk", score: "4.0", review: "Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! " },
        { name: "Keegan Fernandes", photo: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_100_100/0/1673411388008?e=1683158400&v=beta&t=9NrzIE8R3NYrVh7vK9B1G6PVQ-aSZVn7IpMGGIuIIPE", score: "5.0", review: "Sick!" },
        { name: "Harry Potter", photo: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg", score: "3.5", review: "Very cool" },
        { name: "Hermione Granger", photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg", score: "4.0", review: "Do better." }
    ]

    //stateful list
    const [profiles, setVisibleProfiles] = React.useState(initialProfiles);
    const [reviews, setReviews] = React.useState(initialReviews);
    const [userReview, setUserReview] = React.useState(''); // new review to be added 
    const [hasReview, setHasReview] = React.useState(false);
    const [firstTime, setFirstTime] = React.useState(true);
    const [clickEdit, setClickEdit] = React.useState(false);

    const [starred, setStarred] = React.useState(initialProfiles.starred);

    // reviews 
    const handleEnteredReview = (event) => {
        setUserReview(event.target.value);
    }

    const handleAddReview = (event) => {
        const newReview = reviews.concat({
            name: "John Doe",
            photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk",
            score: "4.7",
            review: userReview,
        });

        setClickEdit(false);

        if (!hasReview) {
            setReviews(newReview);
            setHasReview(true);
            setFirstTime(false);
        }

        if (clickEdit) {
            const current = [...reviews];
            const edit = current.find(user => user.name === 'John Doe');
            edit.review = userReview;
            setReviews(current);
        }
    }

    const handleEditReview = (event) => {
        setClickEdit(true);
        setFirstTime(false);
        setHasReview(true);
    }

    // TO-DO: favouriting 

    const handleRemoveProfile = (person) => {
        const newProfiles = profiles.filter(
            (initialProfiles) = person.profileID !== initialProfiles.profileID);
        setVisibleProfiles(newProfiles);
    };

    const handleStarred = (event) => {
        starred = profiles.starred;
        setStarred(!profiles.starred);
        profiles.starred = starred;
    }

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
                <Typography variant="h3" marginY={4} gutterTop color="inherit" noWrap align='center'>
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

                    <Grid container spacing={4} marginTop={4} direction="row">
                        {profiles.slice(0, 5).map((profile) => {
                            return (
                                <Grid item>
                                    <MatchProfile
                                        profile={profile}
                                        onClick={handleClickOpen}
                                        open={open}
                                        onClose={handleClose}
                                        reviews={reviews}
                                        onAdd={handleAddReview}
                                        onChange={handleEnteredReview}
                                        userReview={userReview}
                                        hasReview={hasReview}
                                        firstTime={firstTime}
                                        onEdit={handleEditReview}
                                        edit={clickEdit}
                                    />
                                </Grid>
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
    const [buttonMessage, setButtonMessage] = React.useState('Add Review');

    React.useEffect(() => {
        if (props.edit) {
            setButtonMessage("Save Review.");
        };
    }, [props.edit])

    const handleStarred = (event) => {
        starred = props.profile.starred;
        setStarred(!props.profiles.starred);
        props.profiles.starred = starred;
    }

    return (
        <div>
            {/* <Grid item> */}
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={props.profile.photo}
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

                    <Dialog open={props.open} onClose={props.onClose} maxWidth='md' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1 }}  >
                        <DialogTitle marginBottom={4}>Match Profile Details</DialogTitle >
                        <DialogContent>
                            <DialogContentText spacing={4}>
                                <Stack direction='row' spacing={4} marginBottom={4}>
                                    <Avatar
                                        alt="Andre Laroque"
                                        sx={{ width: 240, height: 240 }}
                                        src={props.profile.photo} />
                                    <div>
                                        <Typography variant='h4'>{props.profile.name}</Typography>
                                        <Typography><b>Sex:</b> {props.profile.sex}</Typography>
                                        <Typography><b>Age:</b> {props.profile.age}</Typography>
                                        <Typography><b>Age:</b> {props.profile.age}</Typography>
                                        <Typography><b>Sex:</b> {props.profile.sex}</Typography>
                                        <Typography><b>Age:</b> {props.profile.age}</Typography>
                                        <Typography><b>Age:</b> {props.profile.age}</Typography>
                                    </div>
                                </Stack>

                                <Divider>
                                    <Chip margin={4} label="Reviews" />
                                </Divider>

                                {props.reviews.map((review) => (
                                    <Grid>
                                        <Grid marginTop={4}>
                                            <Stack direction="row" spacing={4}>
                                                <Avatar
                                                    alt={review.name}
                                                    sx={{ width: 56, height: 56 }}
                                                    src={review.photo} />
                                                <Stack direction="column">
                                                    <Typography variant='h6'><b>⭐ {review.score}</b> </Typography>
                                                    <Typography variant='body'>{review.review} </Typography>
                                                    <Typography variant='overline'><b>{review.name}</b></Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                ))}

                                {(props.firstTime || props.edit) ?
                                    <div>
                                        <Stack marginTop={4} spacing={2}>
                                            <Typography variant='h6'>Your review</Typography>
                                            <TextField
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={4}
                                                placeholder="Write your review here!"
                                                defaultValue={props.userReview}
                                                fullWidth
                                                onChange={props.onChange}
                                            />
                                            <Button variant="contained" size="small" onClick={props.onAdd}>
                                                {buttonMessage}
                                            </Button>
                                        </Stack>
                                    </div>
                                    :
                                    <div>
                                        <Button variant='text' onClick={props.onEdit}>Edit Review</Button>
                                    </div>
                                }

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
        </div>
    );
}

export default Matches;