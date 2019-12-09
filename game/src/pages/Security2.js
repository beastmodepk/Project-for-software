import React from "react";
// import { Link } from "react-router-dom";
// import hero_laugh from "./hero_laugh.png";

export default function Security2() {
  return (
    <div className="security-lesson">
      <p>
        Oh, someone knocked on the door and shouted that they have some
        important mail for me but I don’t expect anyone, I don’t know that
        person and I didn’t order anything! I probably shouldn’t open the door
        and ask my parents first if it safe to open the package…
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        In the digital world, just like in the story, you should never trust a
        source before asking your parents first. There are some pretty bad
        people out there who want to get access to your personal data. Some of
        them create “Viruses”, programs that mess around with your data, edit,
        delete or leak it. The people who built your computer usually do a good
        job protecting it against viruses and other malware. But the bad people,
        “Scammers”, are very creative in finding ways to still infect your
        computer. Most of the time, viruses hide in attachments or downloads
        from websites that you should not trust. Never open eMails from an
        unknown sender, especially not the attachments. Scammers are smart and
        try to make their eMail seem urgent or try to seem familiar so you trust
        them.
      </p>
      <br />
      {/* need to make text appear on click with animation */}
      <p>
        Hmm, the person just left but they left the package on my doorstep. Oh
        the package is wrapped in gift paper and there’s a tag that says ‘Lots
        of love, your sister. Open the package soon before the things inside go
        bad!’ Well, I don’t have a sister but who would send their sibling
        something bad? And I don’t want the things inside to go bad, I should
        just open it now and see what is inside.
      </p>
    </div>
  );
}
