import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../Navigation/NavBar';
import { Container, Stack } from '@mui/system';

const Matches = () => {

    const profiles = [
        { name: "Andre Laroque", age: '21', sex: 'ooga booga', photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { name: "Andre Laroque", age: '21', sex: 'ooga booga', photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { name: "Andre Laroque", age: '21', sex: 'ooga booga', photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { name: "Andre Laroque", age: '21', sex: 'ooga booga', photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" },
        { name: "Andre Laroque", age: '21', sex: 'ooga booga', photo: "https://media.licdn.com/dms/image/D5603AQFBxavaiU9LiQ/profile-displayphoto-shrink_800_800/0/1670381697821?e=1683158400&v=beta&t=M7JLVnDJr6yqtOduxSX3KzAkiEHjm9pLyB1QQLHFMXk" }
    ]

    const [starred, setStarred] = React.useState(false);

    const handleStarred = (event) => {
        setStarred(true);
        // reset();
    }

    // const reset = () => { // function that resets submit and valid states
    //     setStarred(false);
    //   }

    return (
        <div>
            <NavBar />
            <Grid marginTop={2}>

                <Typography variant="h3" gutterTop color="inherit" noWrap align='center' paddingBottom={1}>
                    Here Are Your Matches!
                </Typography>
                <Container>
                    <Grid container marginTop={4} spacing={4} direction="row">
                        {profiles.map((profile) => (

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
                                        <Button size="small">View Profile</Button>
                                        <IconButton aria-label="add to favorites" onClick={handleStarred} starred={starred}>
                                            {(starred) 
                                                ? <StarIcon color="primary"/>
                                                : <StarBorderIcon />
                                            }
                                        </IconButton>
                                        <IconButton aria-label="reject">
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Container>

            </Grid>
        </div>



    );
}
export default Matches;