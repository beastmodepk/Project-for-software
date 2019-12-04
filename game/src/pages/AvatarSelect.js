import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function AvatarSelect() {
  return (
    <div className="avatar-selection">
      <h1>Select your Avatar</h1>
      <Button to="/lesson-select" renderAs={Link}>
        Avatar 1
      </Button>
      <Button to="/lesson-select" renderAs={Link}>
        Avatar 2
      </Button>
    </div>
  );
}
