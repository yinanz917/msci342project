import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
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
        { profileID: 5, name: "Andre Laroque", age: '21', sex: 'ooga booga', starred: false, reject: false, photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" }
    ]

    const [profiles, setVisibleProfiles] = React.useState(people);

    const handleRemoveProfile = (person) => {
        const newProfiles = profiles.filter(
            (people) = person.profileID !== people.profileID);
        setVisibleProfiles(newProfiles);
    };

    const handleStarred = (event) => {
        setStarred(!profiles.starred);
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
                    <Stack direction="row" spacing={4}>
                        <Button variant="outlined" startIcon={<RefreshIcon />}>
                            Refresh
                        </Button>
                        <Button variant="contained" component={Link} to="/starred">
                            View Starred
                        </Button>
                    </Stack>

                    <Grid container marginTop={4} spacing={4} direction="row" >
                        {profiles.map((profile) => {
                            return (
                                <Grid item>
                                    <Card sx={{ maxWidth: 200 }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={profile.photo}
                                            title="green iguana"
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
                                            <Dialog open={open} onClose={handleClose} fullWidth='sm'>
                                                <DialogTitle marginBottom={4}>Match Profile Details</DialogTitle >
                                                <DialogContent>
                                                    <DialogContentText spacing={4}>
                                                        <Stack direction='row' spacing={4}>
                                                            <Avatar
                                                                alt="Andre Laroque"
                                                                sx={{ width: 240, height: 240 }}
                                                                src={profile.photo} />
                                                            <div>
                                                                <Typography variant='h4'>{profile.name}</Typography>
                                                                <Typography><b>Sex:</b> {profile.sex}</Typography>
                                                                <Typography><b>Age:</b> {profile.age}</Typography>
                                                                <Typography><b>Age:</b> {profile.age}</Typography>
                                                            </div>
                                                        </Stack>
                                                        <Typography><b>Sex:</b> {profile.sex}</Typography>
                                                        <Typography><b>Age:</b> {profile.age}</Typography>
                                                        <Typography><b>Age:</b> {profile.age}</Typography>



                                                    </DialogContentText>

                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Back to Matches</Button>
                                                </DialogActions>
                                            </Dialog>

                                            <IconButton aria-label="add to favorites">
                                                <StarBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="reject">
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        }
                        )}
                    </Grid>

                    {/* <MatchesList
                        profileList={profiles}
                        onDelete={handleRemoveProfile}
                        onClickView={handleOpen}
                        open={open}
                        onClose={handleClose}
                    /> */}
                </Container>

            </Grid>
        </div>

    );
}

// // const MatchesList = (props) => {
// return (
//     <div>
//         <Grid container marginTop={4} spacing={4} direction="row" >
//             {props.profileList.map((profile) => {
//                 return (
//                     <Match
//                         profile={profile}
//                         onRemoveProfile={props.onDelete}
//                     />
//                 );
//             }
//             )}
//         </Grid>
//     </div>
// )
// }


// const Match = ({ profile, onRemoveProfile, onClickView, open, onClose }) => {

//     const handleRemoveProfile = () => {
//         onRemoveProfile(profile);
//     }

//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 400,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         p: 4,
//     };


//     // const handleOpen = () => setOpen(true);
//     // const handleClose = () => setOpen(false);

//     return (
//         <Grid item>
//             <Card sx={{ maxWidth: 200 }}>
//                 <CardMedia
//                     sx={{ height: 200 }}
//                     image={profile.photo}
//                     title="green iguana"
//                 />

//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {profile.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {profile.sex} | {profile.age}
//                     </Typography>
//                 </CardContent>

//                 <CardActions>
//                     <Button size="small" onClick={onClickView}>View Profile</Button>
//                     <Modal
//                         open={open}
//                         onClose={onClose}
//                         aria-labelledby="modal-modal-title"
//                         aria-describedby="modal-modal-description"
//                     >
//                         <Box sx={style}>
//                             <Typography id="modal-modal-title" variant="h6" component="h2">
//                                 Text in a modal
//                             </Typography>
//                             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                             </Typography>
//                         </Box>
//                     </Modal>

//                     <IconButton aria-label="add to favorites">
//                         <StarBorderIcon />
//                     </IconButton>
//                     <IconButton aria-label="reject" onClick={handleRemoveProfile}>
//                         <DeleteIcon />
//                     </IconButton>
//                 </CardActions>
//             </Card>
//         </Grid>
//     );
// }

export default Matches;

{/* <IconButton aria-label="add to favorites">
{profile.starred}
{(profile.starred)
    ? <StarIcon color="primary" />
    : <StarBorderIcon />
}
</IconButton> */}