import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function LessonSelect() {
  return (
    <div className="lesson-selection">
      <h1>
        Here are 8 Lessons to pick from. Pick a lesson to see the PSG and answer
        questions
      </h1>
      <Link to="/Security1">Security</Link>
      <Link to="/lesson2">Digital Downtime</Link>
      <Link to="/lesson2">Etiquette</Link>
      <Link to="/lesson2">Health</Link>
      <Link to="/lesson2">Integrity</Link>
      <Link to="/lesson2">Privacy</Link>
      <Link to="/lesson2">Responsibility</Link>
      <Link to="/lesson2">Literacy</Link>
    </div>
  );
}
