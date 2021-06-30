import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Menu } from "../Menu";
import { HeaderWrapper, HamburgerWrapper, MenuLine } from "./styles";

export function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const [factNumber, setFactNumber] = useState(1);
  const [fact, setFact] = useState("");
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "smallLogo.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 80
            quality: 50
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  const factsArr = [
    `My wife has never called me Jon. She hates it. She calls me Jack instead.`,
    `I have a French Bulldog named Millie - she absolutely hates when I code late into the night.`,
    `I take my coffee with both cream and sugar and you can't make me feel bad about this.`,
    `My first coding project had me creating a "ticket desk" for tracking complaints in a transportation department.`,
    `I've written more code in VBA than I'd care to admit. There was a time when I worked exclusively in Excel.`,
    `My brother advised me to start my programming journey with PHP. To this day I still haven't fully learned it.`,
    `I can and will eat an entire thin crust pizza from Domino's.`,
    `Conventional projects are great and all, but I do love creating weird apps that no one will ever use too.`,
    `My first video game system was an 8bit Nintendo Entertainment System and my favorite game was Metroid.`,
    `My wife is Australian and makes me pretend I'm British when meeting new people because my accent sounds so dumb.`,
    `I am not a morning person and it is shocking how many people are.`,
    `I used to really enjoy flashing new ROMS on my android phones back in the day.`,
    `Javascript was and continues to be my most used language. Coupled with React it is by far my most comfortable space.`,
    `I am constantly unhappy with my deployed apps and projects. I will go back and tweak small things even after years have gone by.`,
    `I don't think the number of lines of code or being able to white board code make a good developer.`,
    `I will happily spend an entire weekend reading documentation and working on new project ideas.`,
    `I am a big fan of HIIT and indoor cycling as methods for keeping in shape.`,
    `I have terrible eyesight and in certain lighting conditions am almost completely color blind.`,
    `I cannot see laser pointers. Not even a little bit.`,
    `On average I get around 4-5 hours of sleep per night. On a good night I'll get 7.`,
    `VS code is my editor of choice and JetBrains are my preferred IDE's. IntelliJ is awesome.`,
    `I love mechanical keyboards and have developed an inability to type on anything that is not mechanical.`,
    `Preferred coding music can vary based on the project so please don't pin me down.`,
    `I think I use maybe 7 to 8 git commands on the regular - everything else I have to look up when needed.`,
    `I love raspberry pi's and have several of them running everything from servers to ad blockers.`,
    `I like putting my raspi's in ridiculous cases. It's actually problematic.`,
    `At this point I really prefer MacOS and worry that I'm losing my Windows mojo.`,
    `I know that blue light is a thing - I just never remember to care about it.`,
    `I ate green peas for lunch for almost 2 years straight. One because of cost, two because I like green peas.`,
    `I still eat cereal. I am not sorry about this.`,
    `I jumped into my first coding project without any prior programming knowledge and it was the most wonderful and stressful thing ever.`,
  ];
  const getFact = arr => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    setFactNumber(Math.floor(Math.random() * (500 - 2)));
    setFact(arr[randomNumber]);
  };
  const menuFromKeyboardStateChange = () => {
    setShowMenu(true);
  };
  const handleClick = () => {
    setShowMenu(!showMenu);
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const facts = document.getElementById("facts");
    const navs = document.getElementById("navs");
    const siteLogo = document.getElementById("logo");
    if (showMenu) {
      getFact(factsArr);
      menuBtn.classList.add("close");
      menu.classList.add("show");
      facts.classList.add("show");
      navs.classList.add("show");
      siteLogo.classList.add("hide");
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      facts.classList.remove("show");
      navs.classList.remove("show");
      siteLogo.classList.remove("hide");
    }
  };
  return (
    <>
      <HeaderWrapper>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="jcodes logo"
          id="logo"
        />
        <div>
          <HamburgerWrapper
            id="menuBtn"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleClick()}
            onClick={() => handleClick()}
          >
            <MenuLine id="btnLine"></MenuLine>
            <MenuLine id="btnLine"></MenuLine>
            <MenuLine id="btnLine"></MenuLine>
          </HamburgerWrapper>
        </div>
      </HeaderWrapper>
      <Menu
        factNumber={factNumber}
        fact={fact}
        stateChange={menuFromKeyboardStateChange}
      ></Menu>
    </>
  );
}
