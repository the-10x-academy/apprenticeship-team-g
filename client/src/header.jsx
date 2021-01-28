import React from "react";
import "./header.css";
import img from "./img/icon.png"
import img1 from "./img/camera.png"

const Header = () => (
    <div className="header">
      <img src={img} alt="logo" />
      <p>Instaclone</p>
        <img className="sec_img" src={img1} alt="cameralogo"/>
    </div>  
   
  )
export default Header;
