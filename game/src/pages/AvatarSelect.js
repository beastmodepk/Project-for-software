import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import hero_orb from './hero_orb.jpg';

export default function AvatarSelect() {
  return (
    <div className="avatar-selection">
      <h1>Select your Avatar</h1>
   
       
      <br></br>
      <br></br>
     <div>
        <Link to="/select-lesson">
        Avatar 1
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
     </div>
     <br></br>
     <br></br>
     <div>
      <Link to="/select-lesson">
        Avatar 2
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      <div>
      <Link to="/select-lesson">
        Avatar 3
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      <div>
      <Link to="/select-lesson">
        Avatar 4
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      
    </div>
  );
}
