import React, { Component } from "react";
import { Link } from "react-router-dom";
import hero_laugh from "./hero_laugh.png";

export default function Security4() {
  return (
    <div className="security-lesson">
      <p>
        Phew, I feel way better now. But I heard rumors that there might be a
        storm next week, I should go outside and buy a new raincoat. But I don’t
        know too many stores around this neighbourhood and I heard that there
        have been some robberies in the dark allies. I should better stay in the
        well illuminated road and go to the places that I already know are safe.
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        The same concept applies to the Internet. Stay on the web pages that you
        already know are safe. When you search for something on your search
        engine and you want to click on a website always look out for the
        website’s address. It is located right below the title of the website
        and we call it a “URL”. That stands for uniform resource locator and
        simply helps identify the location of the content, just like the address
        you put on a letter. If it starts with https:// in the URL, it is safe.
        Another characteristic to look out for is the general name of the URL. A
        reliable and trustworthy website uses words that relate to the content
        that is displayed on the website. For example, if you are searching for
        “cat babies”, a website called https://cute-cat-babies.org is more
        trustworthy than a website called
        http://xxx-click-&&not-virus-m$aybe-do%gs.to.
      </p>
    </div>
  );
}
