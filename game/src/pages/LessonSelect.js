import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

export default function LessonSelect() {
  return (
    <div className="lesson-selection">
      <h1>Here are 8 Lessons to pick from. Pick a lesson to see the PSG and answer questions</h1>
      <Button to="/lesson1" renderAs={Link}>
        (1)Security
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (2)Digital Downtime
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (3)Etiquette
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (4)Health
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (5)Integrity
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (6)Privacy
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (7)Responsibility
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        (8)Literacy
      </Button>
    </div>
  );
}
