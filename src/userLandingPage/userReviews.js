import React from "react";
import { Paper } from '@material-ui/core';
import "../App.css"


class Userreviews extends React.Component{
    constructor(props){
       super(props);
       this.state={
           reviewerInfo:[
               { 
                image:"./profile.jpg",
                review:"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since th",
                name:"ramesh",
                designation:"Fullstack Developer"
             },

           /* { 
               image:"./another.jpg",
               review:"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since th",
               name:"Bala",
               designation:"Backend Developer"
            },
 
            { 
               image:"./another2.jpg",
               review:"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since th",
               name:"mrudhula",
               designation:"Backend Developer"
            },*/
        ],
        reviewCount:0,
       }
    }
    render(){
        
        return(
            <div>
                <div className="user-image-div">
                 {this.state.reviewerInfo.map((item,index)=>
                   <Paper elevation={4} className="review-elements">
                   <div className="user-image">
                     <img src={`${item.image}`} className="user-image-class" alt="author"></img>
                   </div>
                   <div className="user-review">
                     <p className="review-text">{item.review}<span className="reviewer-name">.......{item.name}({item.designation})</span></p>
                   </div>
                  </Paper>
                 )}       
                </div>
            </div>)
    }
}
export default Userreviews;