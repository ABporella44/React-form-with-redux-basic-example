import { render } from "@testing-library/react";
import React from "react";


class Sidenavigation extends React.Component{
    constructor(props){
         super(props);
      }

render(){
    return(
        <div className="side-nav-list">
        <ul className="list-elements-sidenav">
            <li className="list-item">About Me</li>
            <li className="list-item">Where I am from</li>
            <li className="list-item">Education</li>
            <li className="list-item">Achivements</li>
            <li className="list-item">Contact Me</li>
        </ul>
        </div>
    )
}
}

export default Sidenavigation;