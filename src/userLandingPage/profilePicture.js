import React from "react";
import '../App.css';
import profile from '../assets/profilePicture/profile.jpg'
import { useState } from "react";

function ProfilePicture(){
 
const [profilePic, setProfilePic] = useState(profile);

  return(
      <div className="image-div">
          <img className="profileImage-class" src={profilePic}></img>
      </div>
  )
}
export default ProfilePicture;