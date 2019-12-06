import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AvatarSelect from "./pages/AvatarSelect";
import LessonSelect from "./pages/LessonSelect";
import Security from "./pages/Security";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={AvatarSelect} />
      <Route path="/select-lesson" component={LessonSelect} />
      <Route path="/Security" component={Security} />
    </Switch>
  );
}
