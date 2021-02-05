import "./ImageComponent.css";
import React, { useState } from "react";

function ImageComponent(props) {
  // const { imageUrl } = props;
  const imageUrl = "./images/10x.jpg";
  return (
    <div className="imageparent">
      <img src={`http://localhost:9000/${props.img}`} className="imagecompo" />
    </div>
  );
}

export default ImageComponent;
