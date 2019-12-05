import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import hero_orb from './hero_orb.jpg';
import Beastmode from  './Beastmode.jpg';

export default function AvatarSelect() {
  return (
    <div className="avatar-selection">
      <h1>Choose your Avatar</h1>
      <h2 >Here you can choose one of these 4 avatars</h2>
      <br></br>
      <br></br>
     <div>
        <Link to="/select-lesson">
       Superhero
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
     </div>
     <br></br>
     <br></br>
     <div>
      <Link to="/select-lesson">
      Scientist
      </Link>
      <img src ={Beastmode} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      <div>
      <Link to="/select-lesson">
        Sloth
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      <div>
      <Link to="/select-lesson">
        Astronaut
      </Link>
      <img src={Beastmode} alt="hero orb" height="100"/>
      </div>
      <div>
      <Link to="/select-lesson">
        Mermaid
      </Link>
      <img src={hero_orb} alt="hero orb" height="100"/>
      </div>
      <br></br>
     <br></br>
      
    </div>
  );
}
