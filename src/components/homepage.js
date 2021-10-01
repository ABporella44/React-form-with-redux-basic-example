import React, { Component } from "react"
import { Button } from "@material-ui/core"
import { connect } from 'react-redux';

 function HomePage (props){
  console.log(props)
    return(
        <div>
            <h1>Welcome to HomePage</h1>
            <Button color="primary" variant="contained" onClick={()=>{
              props.history.push(`/Login`)
            }}>Logout</Button>
        </div>
    )
}
const mapStateToProps = (hello)=>{
    return {
      registerUsers : hello.userNewReg   
  }
 }
 export default connect(mapStateToProps)(HomePage)