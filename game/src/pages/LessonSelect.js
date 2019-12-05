import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

export default function LessonSelect() {
  return (
    <div className="lesson-selection">
      <h1>Here are 8 Lessons to pick from. Pick a lesson to see the PSG and answer questions</h1>
      <Button to="/lesson1" renderAs={Link}>
        Security
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Digital Downtime
      </Button>
      <Button to="/lesson2" renderAs={Link}>
       Etiquette
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Health
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Integrity
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Privacy
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Responsibility
      </Button>
      <Button to="/lesson2" renderAs={Link}>
        Literacy
      </Button>
    </div>
  );
}
