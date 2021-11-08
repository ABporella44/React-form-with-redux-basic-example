import React,{Component} from 'react'
import { Paper } from '@material-ui/core';
import "../App.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import WorkIcon from '@mui/icons-material/Work';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { blue } from '@material-ui/core/colors';

class ProfileListing extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userprofile:[{name:"Clients",icon:<EscalatorWarningIcon/>},{name:"workExperince",icon:<WorkIcon/>}
            ,{name:"Tech Stack",icon:<ReorderIcon/>},
            {name:"Projects",icon:<CardTravelIcon/>},
            {name:"Contact Details",icon:<ContactPageIcon/>},
            {name:"Resume",icon:<ReceiptIcon/>},
            {name:"Contributions",icon:<GitHubIcon/>},
            {name:"Pictures",icon:<PhotoCameraIcon/>}],
        }
    }
    render(){
        return(
            <div className="users-listing-class">
            {this.state.userprofile.map((element,index)=>
              <Paper  className="user-profile-class" key={index}>
                  <div className="Icon-nametag">{element.name}<br></br><span style={{color:"blue"}}>{element.icon}</span></div></Paper>  
            )}
            </div>
        )
    }
}
export default ProfileListing;