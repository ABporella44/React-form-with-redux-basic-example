import React from "react"
import  { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <Link to="/Login">login</Link>,
            <Link to="/Registration">Register</Link>
        )
    }
}

export default Navigation;
