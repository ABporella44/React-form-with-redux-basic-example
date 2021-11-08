import React, { Component } from "react";
import './styles.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";
import { connect } from 'react-redux';
import actionCreators from "../actions/actionCreators";
import { Link,Redirect } from "react-router-dom";
import { withRouter} from "react-router-dom";
import Homepage  from '../components/homepage';
import Registration from "./Registration";
import { username } from "../actions/actionTypes";
class Login extends Component {

   constructor(props){
     super(props);
    this.state = {
      userName:" ",
      password:" ",
      login:false,
      
    }
  
   }
   

   handleSubmit = (e)=>{
  e.preventDefault();
    let registeredUsers = this.props.registerUsers;
        registeredUsers.find((items,index)=>{
          if(this.state.userName === items.userName && this.state.password === items.password) 
          {
              this.setState({login:true})
              
          }
          console.log(this.state.login);
    })
    console.log(this.state.login);       

   }


    handleChangeName = (e)=>{
      //this.props.dispatch(actionCreators.username(e.target.value));
    this.setState({
       userName : e.target.value
     })
    }

     handleChangePassword = (e)=>{
      //this.props.dispatch(actionCreators.userPassword(e.target.value));
     this.setState({
        password : e.target.value
      })
      }
      
      render() {

        return(
          <div>
            {
              this.state.login ? (
              <>
                 { this.props.history.push(`/Homepage/${this.state.userName}`)};
              </>):(
              <>

                 <div className="root-class">
                   
            <Grid className="grid-class" container spacing={3}>
              <Grid item xs={4}></Grid>
               <Grid className="form-elements" item xs={4}>
                  <form onSubmit={this.handleSubmit}>
                  <h1>User Login:</h1>
                  <div className="form-label">
                  <label>Enter User Name :</label>
                    <TextField
                     onChange={this.handleChangeName}
                     label="Enter UserName"
                     type="text"
                     variant="outlined"
                    />
                    </div>
                    <div className="form-label">
                    <label>Please Enter your password :</label>
                     <TextField
                      onChange={this.handleChangePassword}
                      variant="outlined"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    </div>
                  </form>
                  <div className="button-class">
                  <Button color="primary"  size="medium" onClick={this.handleSubmit} variant="contained">Login</Button>
                  <Link to ="/Registration" color="primary" size="medium" variant="contained">New User?</Link>
                  </div>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </div>
              </>)
            }
          </div>
        )
          }  
        }
          
const mapStateToProps = (hello)=>{
   return {
     registerUsers : hello.userNewReg   
 }
}


 export default connect(mapStateToProps)(withRouter(Login))
