import React from "react";
import { Paper } from '@material-ui/core';
import "../App.css"

class Userreviews extends React.Component{
    constructor(props){
       super(props);
    }
    render(){
        return(
            <div>
                <Paper>
                <div className="user-image-div">
                <img src={'./profile.jpg'} className="user-image-class" alt="author"></img>
                </div>
                <div className="user-review">
                    <p className="review-text">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th"</p>
                </div>
                </Paper>
            </div>)
    }
}
export default Userreviews;