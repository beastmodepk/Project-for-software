import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero_laugh from "./hero_laugh.png";

export default function Security1() {
  return (
    <div className="security-lesson">
      <p>
        LINA: Look, I just reached my secret hideout! Only I have the key so
        nobody else can get in and steal my secret research and my precious
        treasures!
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        In the digital world, your folders and personal data are contained in a
        secret hideout too, usually on your computer or in an online account.
        Only people who have the right key, a password that you set, can open it
        and access your data. For example in order to open your phone, you have
        to type in 4 numbers. If they are correct, you get to use the phone.
        Usually, you need a more secure password, for example for your eMail
        account. A data thief could easily guess these numbers, so never use
        your name or birthday as part of the password. A good and secure
        password should contain numbers, symbols, capital letters and lower-case
        letters. This can be difficult to remember - this is why you should
        incorporate a phrase or sequences that are familiar to you.
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
