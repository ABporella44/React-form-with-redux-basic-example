import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";
import './styles.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import newRegisterdUser from "../actions/newregustration";
import { newUser } from "../actions/actionTypes"
class Registration extends Component{

    constructor(props){
        super(props);
        this.state= {
          profile:{
            firstName:"",
            lastName:"",
            userName:"",
            password:"",
            emailAddress:"",
            mobileNumber:"",
            pincode:"",
            state:"",
            alreadyRegistered:false
          }
           
        }
        
    }

 

    handleSubmit = (e)=>{
      console.log(this.state.profile);
      this.props.dispatch(newRegisterdUser.newUser(this.state.profile));

      }
   
    render(){
      console.log(this.props)
   
        return(
            <div className="reg-root-class">
                
                <Grid className="grid-class" container spacing={3}>
                  <Grid item xs={4}></Grid>
                  <Grid item  className="form-elements" xs={4}>
                  <h1>Registration Form </h1>
                     <form>
                     <div className="address-class">
                     <div className="form-label">
                     <label>Enter your FirstName :</label>
                    <TextField
                     label="FirstNAme"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             firstName:event.target.value
                           }
                      }))
                    }}
                     type="text"
                     variant="outlined"
                    />
                    </div>
                    <div className="form-label">
                  <label>Enter Last Name :</label>
                    <TextField
                     label="Enter Lastname"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             lastName:event.target.value
                           }
                      }))
                    }}
                     type="text"
                     variant="outlined"
                    />
                    </div>
                    </div>
                    <div className="form-label">
                  <label>Create Username :</label>
                    <TextField
                     label="create a UserName"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             userName:event.target.value
                           }
                      }))
                    }}
                     type="text"
                     variant="outlined"
                    />
                    </div>
                    <div className="address-class">
                    <div className="form-label">
                  <label>create a password :</label>
                    <TextField
                     label="Enter UserName"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             password:event.target.value
                           }
                      }))
                    }}
                     type="password"
                     variant="outlined"
                    />
                    </div>
                    <div className="form-label">
                  <label>confirm password :</label>
                    <TextField
                     label="repeat password"
                     type="password"
                     variant="outlined"
                    />
                    </div>
                    </div>
                    <div className="address-class">
                    <div className="form-label">
                  <label>Enter your Email :</label>
                    <TextField
                     label="Enter your email"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             emailAddress:event.target.value
                           }
                      }))
                    }}
                     type="email"
                     variant="outlined"
                    />
                    </div>
                    <div className="form-label">
                  <label>Mobile Number :</label>
                    <TextField
                     label="Enter your mobile No"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             mobileNumber:event.target.value
                           }
                      }))
                    }}
                     type="number"
                     variant="outlined"
                    />
                    </div>
                    </div>
                    <div className="address-class">
                    <div className="form-label">
                   <label>Enter pincode :</label>
                    <TextField
                     label="Enter pincode"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             state:event.target.value
                           }
                      }))
                    }}
                     type="number"
                     variant="outlined"
                    />
                    </div>
                    <div className="form-label">
                   <label>Enter your state :</label>
                    <TextField
                     label="Enter city"
                     type="text"
                     onChange={(event)=>{
                      this.setState((prevState)=>({
                           profile:{
                             ...prevState.profile,
                             city:event.target.value,
                             alreadyRegistered:true
                           }
                      }))
                    }}
                     variant="outlined"
                    />
                    </div>
                    </div>
                    
                     </form>
                     <div className="button-class">
                  <Button color="primary"  size="medium" onClick={this.handleSubmit} variant="contained">Register</Button>
                  <Button color="primary"  size="medium" variant="contained"><Link style={{color:"white"}} to="/Login">Already a user</Link></Button>
                  </div>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>

            </div>
        )
    }

}


const mapStateToProps = (state)=>{
  console.log("Hai this is from after store update",state);
}
export default connect(mapStateToProps)(Registration);