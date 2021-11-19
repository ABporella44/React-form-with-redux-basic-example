import React from "react";
import { Paper } from '@material-ui/core';
import "../App.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackIosNew';
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

           { 
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
            },
            { 
              image:"./another2.jpg",
              review:"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since th",
              name:"poojitha",
              designation:"scrum master"
           },
        ],
        reviewCount:3,
       }
    }

  slideNextReview=()=>{
   if(this.state.reviewCount == this.state.reviewerInfo.length - 1 ){
     this.setState({reviewCount:0})
   }else{
  let nextImage=this.state.reviewCount+1;
  this.setState({
    reviewCount:nextImage
  })
 }
}

 slideBackReview=()=>{
   if(this.state.reviewCount >= 1){
  let nextImage = this.state.reviewCount - 1;
  this.setState({
    reviewCount:nextImage
  })
}
}
    render(){
      
        return(
            <div>
                <div className="user-image-div">
                  <ArrowBackwardIosIcon onClick={this.slideBackReview}/>
                   <Paper elevation={4} className="review-elements" >
                   <div className="user-image">
                     <img src={`${this.state.reviewerInfo[this.state.reviewCount].image}`} className="user-image-class" alt="author"></img>
                   </div>
                   <div className="user-review">
                     <p className="review-text">{this.state.reviewerInfo[this.state.reviewCount].review}<span className="reviewer-name">.......{this.state.reviewerInfo[this.state.reviewCount].name}({this.state.reviewerInfo[this.state.reviewCount].designation})</span></p>
                   </div>
                  </Paper>
                 <ArrowForwardIosIcon onClick={this.slideNextReview}/>
                </div>
            </div>)
    }
}
export default Userreviews;

/*
{this.state.reviewerInfo.map((item,index)=>
                   <Paper elevation={4} className="review-elements" >
                   <div className="user-image">
                     <img src={`${item.image}`} className="user-image-class" alt="author"></img>
                   </div>
                   <div className="user-review">
                     <p className="review-text">{item.review}<span className="reviewer-name">.......{item.name}({item.designation})</span></p>
                   </div>
                  </Paper>
                 )}   */