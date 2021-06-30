import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { MenuWrapper, FactWrapper, NavWrapper, NavButton } from "./styles";

export function Menu({ fact, factNumber, stateChange }) {
  const handleMenu = e => {
    smoothscroll.polyfill();
    stateChange();
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const facts = document.getElementById("facts");
    const navs = document.getElementById("navs");
    const siteLogo = document.getElementById("logo");
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    facts.classList.remove("show");
    navs.classList.remove("show");
    siteLogo.classList.remove("hide");
    const yOffset = -80;
    const navTo = document.getElementById(e.target.innerHTML);
    const y = navTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <MenuWrapper id="menu">
      <FactWrapper id="facts">
        <h2>Jon Fun Fact # {factNumber}</h2>
        <p>{fact}</p>
      </FactWrapper>
      <NavWrapper id="navs">
        <NavButton
          id="navItem"
          tabIndex="0"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          home
        </NavButton>
        <NavButton
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          resume
        </NavButton>
        <NavButton
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          blog
        </NavButton>
        <NavButton
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          projects
        </NavButton>
        <NavButton
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          contact
        </NavButton>
      </NavWrapper>
    </MenuWrapper>
  );
}
