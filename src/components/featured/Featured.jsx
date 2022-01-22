import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss"

function Featured() {
  return (
    <div className="featured">
      <img
        
        src="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BpZGVyJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt=""
      />

      <div className="info">
        <h1 className="title">Sprider Man</h1>
        <span className="descr">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          suscipit hic maxime impedit officia accusamus neque magni est unde
          magnam, debitis voluptas dolorem voluptatum, explicabo expedita
        </span>
        <div className="buttons">
            <button className="play"> <PlayArrow/> <span>Play</span> </button>
            <button className="more"><InfoOutlined/> <span>More</span></button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
