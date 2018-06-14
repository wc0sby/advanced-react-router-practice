import React from "react";
import {Link} from "react-router-dom"

function Marquee(props) {
  const message = "hello";
  return (  
    <div>
    <marquee>{message}</marquee>
    <marquee>{message}</marquee>
    <marquee>{message}</marquee>
    <Link to={"/marquee/"+name}><marquee>{message}</marquee></Link>
    </div> 
  );
}

export default Marquee;
