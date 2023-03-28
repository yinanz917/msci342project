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
import { useAuth } from '../Firebase/context';

import NavBar from '../Navigation/NavBar';
import { Container, Stack } from '@mui/system';

const serverURL = "";

const Matches = () => {
    const { currentUser } = useAuth()
    const email = currentUser.email

    React.useEffect(() => {
        loadMatches();
    }, []);

    const loadMatches = () => {
        callApiLoadMatches()
            .then(res => {
                var parsed = JSON.parse(res.express);
                setProfiles(parsed);
                console.log(parsed);
            })
    }

    const callApiLoadMatches = async() => {
        const url = serverURL + "/api/loadMatches";
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

    // @andre directly pull from database
    // const initialProfiles = [
    //     { profileID: 1, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
    //     { profileID: 2, name: "Vyomesh Iyenr", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1683158400&v=beta&t=Fiy4Lb2knxD6Ka-WsfsC5PJJH50YCfL1N_YGgTe7oF4" },
    //     { profileID: 3, name: "Yinan Zhang", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
    //     { profileID: 4, name: "Seb Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
    //     { profileID: 5, name: "Lolla Palooza", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
    //     { profileID: 6, name: "Matt Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg" }
    // ]

    const initialReviews = [
        { name: "Vyomesh Iyengar", photo: "https://media.licdn.com/dms/image/C5603AQHqrtHXE7ewZA/profile-displayphoto-shrink_800_800/0/1645509304205?e=1683158400&v=beta&t=Fiy4Lb2knxD6Ka-WsfsC5PJJH50YCfL1N_YGgTe7oF4", score: "5.0", review: "Amazing roommate, was very clean and always helped out with the dishes!" },
        { name: "Andre Larocque", photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk", score: "4.0", review: "Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! Amazing roommate, was very clean and always helped out with the dishes! " },
        { name: "Keegan Fernandes", photo: "https://media.licdn.com/dms/image/D5603AQH2mcZBrbuEYQ/profile-displayphoto-shrink_100_100/0/1673411388008?e=1683158400&v=beta&t=9NrzIE8R3NYrVh7vK9B1G6PVQ-aSZVn7IpMGGIuIIPE", score: "5.0", review: "Sick!" },
        { name: "Harry Potter", photo: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg", score: "3.5", review: "Very cool" },
        { name: "Hermione Granger", photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg", score: "4.0", review: "Do better." }
    ]

    //stateful list
    const [profiles, setProfiles] = React.useState([]);

    const handleRefresh = () => {
        console.log("refreshed!");
        loadMatches();
    }

    return (
        <div>
            <NavBar />
            <Grid>
                <Typography variant="h3" marginY={4} gutterTop color="inherit" noWrap align='center'>
                    Here Are Your Matches!
                </Typography>

                <Container>
                    <Stack direction="row" marginTop={4} display='flex' justifyContent='space-between'>
                        <Button variant="contained" component={Link} to="/starred">
                            View Starred
                        </Button>
                        <Button variant="outlined" onClick={handleRefresh} startIcon={<RefreshIcon />}>
                            Refresh
                        </Button>
                    </Stack>

                    <Grid container justifyContent='space-between' marginTop={4} direction="row">
                        {profiles.slice(0, 5).map((profile) => {
                            return (
                                <Grid item>
                                    <Typography>{profile.name}</Typography>
                                    <MatchProfile
                                        profile={profile}
                                        initialReviews={initialReviews}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}

const MatchProfile = (props) => {
    const { currentUser } = useAuth()
    const email = currentUser.email

    const profile = (props.profile);
    const [starred, setStarred] = React.useState(profile.starred);
    const [removed, setRemoved] = React.useState(profile.reject);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        handleStarred();
        handleRemove();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStarred = () => {
        setStarred(!starred);
        profile.starred = starred;
        //add api call, same as rejects
    }

    const handleRemove = () => {
        setRemoved(!removed);
        profile.reject = removed;
        setRejects();
    }

    const setRejects = async () => {
        callApiSetRejects()
          .then(res => {
            var parsed = JSON.parse(res.express);
          });
      }
    
      const callApiSetRejects = async () => {
        const url = serverURL + "/api/setMyRejects";
        console.log(url);
    
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //authorization: `Bearer ${this.state.token}`
          },
          body: JSON.stringify({
            email: email,
            //userID
            
          })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log("Found profile: ", body);
        return body;
      }

    

    return (
        <div>
            {(profile.reject)
                ?
                <Card alignContent='center' sx={{ justifyContent: 'center', textAlign: 'center', width: 200, height: 400, backgroundColor: 'rgba(255, 100, 100, 0.25)' }}>
                    <Stack margin={4} spacing={4} direction='column'>
                        <Typography variant='h6'><b>Awh!</b></Typography>
                        <Typography>You've rejected this match</Typography>
                    </Stack>
                </Card>
                :
                <Card sx={{ maxWidth: 200, maxHeight: 400 }}>

                    <CardMedia
                        sx={{ height: 200 }}
                        image={profile.photo}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {profile.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {profile.sex} | {profile.age}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" onClick={handleClickOpen}>View Profile</Button>

                        <ProfileDialog
                            profile={profile}
                            initialReviews={props.initialReviews}
                            open={open}
                            onClose={handleClose}
                        />
                        <IconButton aria-label="add to favorites" onClick={handleStarred}>
                            {(profile.starred)
                                ? <StarIcon color="primary" />
                                : <StarBorderIcon />
                            }
                        </IconButton>
                        <IconButton aria-label="reject" onClick={handleRemove}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                    {/* </Div> */}
                </Card>
            }
        </div>
    );
}

export function ProfileDialog(props) {
    const [userReview, setUserReview] = React.useState(''); // new review to be added to DB
    const [reviewScore, setReviewScore] = React.useState('');
    const [reviews, setReviews] = React.useState([]);
    const [hasReview, setHasReview] = React.useState(false);
    const [firstTime, setFirstTime] = React.useState(true);
    const [clickEdit, setClickEdit] = React.useState(false);
    const [buttonMessage, setButtonMessage] = React.useState('Add Review');

    const { currentUser } = useAuth()
    const email = currentUser.email

    React.useEffect(() => {
        if (clickEdit) {
            setButtonMessage("Save Review");
        };
        getReviews();
    }, [clickEdit])

    // reviews 
    const handleEnteredReview = (event) => {
        setUserReview(event.target.value);
    }

    const handleReviewScore = (event) => {
        setReviewScore(event.target.value);
    }

    const handleAddReview = (event) => {
        // update with user info 
        const newReview = reviews.concat({
            name: "John Doe",
            photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk",
            score: reviewScore,
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
            const edit = current.find(user => user.name === 'John Doe'); // replace with user ID or name
            edit.review = userReview;
            edit.score = reviewScore
            setReviews(current);
        }
    }

    const handleEditReview = (event) => {
        setClickEdit(true);
        setFirstTime(false);
        setHasReview(true);
    }

    /**
     * WIP Get reviews
     */

    const getReviews = () => {
        callApiGetReviews()
            .then(res => {
                console.log("callApiGetReviews returned: ", res)
                var parsed = JSON.parse(res.express);
                console.log("callApiGetReviews parsed: ", parsed)
                setReviews(parsed);
            });
    }

    const callApiGetReviews = async () => {
        const url = serverURL + "/api/getReviews";
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

    return (
        <div>
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
                                <Typography><b>Pronouns:</b> {props.profile.pronouns}</Typography>
                                <Typography><b>Budget:</b> {props.profile.budget}</Typography>
                                <Typography><b>Location:</b> {props.profile.location}</Typography>
                            </div>
                        </Stack>

                        <Divider>
                            <Chip margin={4} label="Reviews" />
                        </Divider>

                        {reviews.map((review) => (
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

                        {(firstTime || clickEdit) ?
                            <div>
                                <Stack marginTop={4} spacing={2} direction='column'>
                                    <Typography variant='h6'>Your review</Typography>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={3}
                                        placeholder="Write your review here!"
                                        defaultValue={userReview}
                                        fullWidth
                                        onChange={handleEnteredReview}
                                    />
                                    <Typography variant='body'>Rating</Typography>
                                    <Stack direction='row' alignItems='center' spacing={2}>
                                        <TextField
                                            id="outlined-basic"
                                            size="small"
                                            placeholder='0.0'
                                            defaultValue={reviewScore}
                                            onChange={handleReviewScore}
                                            width="8px"
                                        />
                                        <Typography variant='body'>/5.0</Typography>
                                    </Stack>
                                </Stack>
                                <Box marginTop={2}>
                                    <Button variant="contained" alignSelf='flex-start' size="small" onClick={handleAddReview} width="24px">
                                        {buttonMessage}
                                    </Button>
                                </Box>
                            </div>
                            :
                            <div>
                                <Button variant='text' onClick={handleEditReview}>Edit Review</Button>
                            </div>
                        }

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Back to Matches</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Matches;