import React from "react";
import '../App.css';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import display from "../assets/displayPicture/displayPicture.jpg"

function DisPicture(){
 
const [displayPicture,setDisplayPic]= useState(display);

  return(
      <div className="display-image-div">
          <div className="display-image-edit-icon">
              edit<EditIcon className="edit-icon"/>
          </div>
          <img className="display-Image-class" src={displayPicture}></img>
      </div>
  )
}
export default DisPicture;