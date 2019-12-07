import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero_laugh from "./hero_laugh.png";

export default function Security5() {
  return (
    <div className="security-lesson">
      <p>
        Now that I have my raincoat I just have to make sure that my secret
        hideout stays dry and hidden, too. I should install some additional
        roofing cardboard to make sure the roof stays where it’s supposed to be.
        It wouldn’t be that good of a hideout if I had to call a handyman to fix
        it, would it?That would defeat the whole purpose.
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        Sometimes, no matter how much attention you pay and how cautious you are
        on the internet, it can still happen that malware sneaks into your
        computer. In order to keep your data and your devices extra safe, you
        should install a program that is designed to repel any attacks from the
        outside. The people who produce that software always update it to keep
        up with criminal’s newest methods. Good computer security softwares are
        made my McAfee, Kaspersky, Norton, Bitdefender and Bullguard.
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
