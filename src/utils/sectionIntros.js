import React from "react";
import { DiScrum } from "react-icons/di";
export const AboutSectionIntro = () => {
  return (
    <h5>
      Hello there! I'm Jon and I switched to a career in tech in late 2014. I've
      been writing code since 2017 and I've been breaking things ever since! I'm
      currently working as a developer for a global logistics company. I work
      mostly on backend projects that include languages like JavaScript, Java,
      and Go. I am also a
      <a
        aria-label="navigates to the Credly site where  you can view the PSM certificate for Jonathan Collins as a Professional Scrum Master"
        href="https://www.credly.com/badges/517ccf0d-c666-4f77-a20e-5581b8d8bec5/public_url"
      >
        <DiScrum /> Certified Scrum Master
      </a>
      .
    </h5>
  );
};

export const BlogSectionIntro = () => {
  return (
    <h5>
      I wanted to tinker with some Gatsby and use a headless CMS for something -
      and thus, my blog was born. I do not write as well, or as often, as I
      would like to, but I do enjoy the opportunity to get some thoughts out
      there into the interwebs. It also never hurts to play with markdown
      parsers and syntax highlighters!
    </h5>
  );
};

export const ProjectSectionIntro = () => {
  return (
    <h5>
      I tend to learn a lot more when I'm buidling things. Below are a
      smattering of personal projects that include all sorts of tools and
      platforms. You'll see some Mongo, some Firebase, some React, some Gatsby,
      some Go, and even a little bit of Vue. I tend to deploy on free services
      to keep costs low, so you'll see Netlify, Render and Railway in most of my
      build configs.
    </h5>
  );
};

export const ContactSectionIntro = () => {
  return (
    <h5>
      I'm just going to say it. I like you. We should keep in touch. There are
      lots of different ways to connect with me, the contact form below,
      Mastodon, LinkedIn, murder mystery weekends, and long walks on the beach.
      But yeah, the contact form and social media links are probably the
      easiest! Thank you for visiting and come back soon!
    </h5>
  );
};
