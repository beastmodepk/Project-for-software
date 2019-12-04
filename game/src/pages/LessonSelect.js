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
      <Button to="/lesson2" renderAs={Link}>
        Lesson 3
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 4
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 5
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 6
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 7
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Lesson 8
      </Button>
    </div>
  );
}
