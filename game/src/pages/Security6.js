import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero_laugh from "./hero_laugh.png";

export default function Security6() {
  return (
    <div className="security-lesson">
      <p>
        Finally settling down in my secret hideout, let’s see what the world is
        up to.. oh no! What is going on with my high tech super turbo computer?!
        I don’t remember downloading all these files? Why are there colored
        lines everywhere and where is the music coming from?! Did I catch a
        virus…?
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        If you see weird things happen on your computer that you didn’t
        initiate, you should become suspicious. Noises, unexpected pop-up
        windows or ads, missing or extra files as well as an unusually slow
        performance or crashes are all signs for a virus infection on your
        computer. It is crucial to notice any weird activity early on so you can
        treat it in a timely manner and save what can be saved.
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        LINA: I just went into my secret hideout and opened my research laptop,
        but I am afraid people will steal what I found out. I want to create a
        password for my laptop. I will take the first letter of every word in
        this sentence to make an acronym. I want to create a password for my
        laptop - so the password will be Iwtcapfml. To make it even more secure,
        I will add an exclamation mark and the current year. So my new password
        is Iwtcapfml!2019.
      </p>
    </div>
  );
}
