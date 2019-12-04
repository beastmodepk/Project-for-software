import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function LessonSelect() {
  return (
    <div className="avatar-selection">
      <h1>Select Lesson</h1>
      <Button to="/scenario1" renderAs={Link}>
        Lesson 1
      </Button>
      <Button to="/scenario2" renderAs={Link}>
        Lesson 2
      </Button>
    </div>
  );
}
