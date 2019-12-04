import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AvatarSelect() {
  return (
    <div className="avatar-selection">
      <h1>Select your Avatar</h1>
      <Link to="/select-lesson">
        Avatar 1
      </Link>
      <Link to="/select-lesson">
        Avatar 2
      </Link>
    </div>
  );
}
