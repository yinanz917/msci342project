import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NavBar from '../Navigation/NavBar';
import Container from '@mui/material/Container';
import houseImage from "../../img/house.jpg";
import '../../index.css';

const Landing = () => {

    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <Grid container direction="column">
            <NavBar/>
            <Grid container direction="row">
                <Grid container direction="column">
                    <Grid item sm>
                    <Typography className='title-text' variant="h3" noWrap>
                        <b>Welcome to Zoommates!</b>
                    </Typography>
                    </Grid>
                    <Grid item sm>
                    <Typography variant="h4" color="inherit" noWrap align='center' paddingTop={2}>
                        Find your dream roommate!
                    </Typography>
                    </Grid>
                </Grid>
                <Container>
                    <img height="100%" width="100%" src={houseImage} alt="An image of a house"/>
                </Container>
            </Grid>
=======
=======
>>>>>>> f0e11f9b4adc9e00fee5193bce7dc72bee0fc4f2
        <Grid>
            <NavBar />
            <Typography variant="h3" color="inherit" noWrap align='center'>
                Welcome to Zoommates Landing Page!
            </Typography>
>>>>>>> 863de0a (basic info and housing)
        </Grid>
    );
}
export default Landing;