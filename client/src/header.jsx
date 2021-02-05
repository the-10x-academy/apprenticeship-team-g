import React from "react";
import "./header.css";
import img from "./img/icon.png"
import img1 from "./img/camera.png"

const Header = () => (
      <div className="parentDiv">
        <div className="logoAndText">
          <img src={img} alt="logo" />
            <p className="instaclone"> Instaclone</p>
        </div>
        <div className="cameraIcon">
        <img className="camera" src={img1} alt="cameralogo"/>
       </div>
      </div>

    //<div className="header">
     // <img className="logoo" src={img} alt="logo" />
      //<p className="para">Instaclone</p>
       // <img className="sec_img" src={img1} alt="cameralogo"/>
    //</div>   
  )
export default Header;
