import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

export default function LessonSelect() {
  return (
    <div className="lesson-selection">
      <h1>Select Lesson</h1>
      <Button to="/lesson1" renderAs={Link}>
        Lesson 1
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 2
      </Button>
    </div>
  );
}
