import React from "react";
import ProfilePicture from "./profilePicture";
import Paper from '@mui/material/Paper';
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import ProfileListing from "./profileListing";
import Sidenavigation from "./sidenavigation";
import Userreviews from "./userReviews";
import DisPicture from "./displayImage";


class LandingPage extends React.Component{
     constructor(props){
      super(props);
    }
    render(){
        return(
            <div className="landing-page">
                <Grid classname="landingPage-component" container spacing={1}>
                <Grid item xs={12}>
                  <Paper className="paper-class">
                    <DisPicture/>
                  </Paper>
                </Grid>      
                </Grid>
                <ProfilePicture className="image-class"/> 
                <Grid className="second-grid" container spacing={1}>
                <Grid className="first-grid-ofsecond" item xs={4}>
                    <Paper className="paper-class paper-class-two" ><Sidenavigation></Sidenavigation></Paper>
                        </Grid>
                        <Grid  item xs={8}>
                            <Grid container className="grid-in-secondarygrid" spacing={12}>
                            <div className="paper-class">
                            <ProfileListing/>
                            </div>
                            <Userreviews/>
                            </Grid>
                        </Grid>
                    </Grid>  
            </div>
        )
    }

}

export default LandingPage; 