import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { MenuWrapper, FactWrapper, NavWrapper } from "./styles";

export function Menu({ fact, factNumber, handleClick }) {
  const handleMenu = e => {
    smoothscroll.polyfill();
    const yOffset = -80;
    const navTo = document.getElementById(e.target.innerHTML);
    const y = navTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClick();
  };
  return (
    <MenuWrapper id="menu">
      <FactWrapper id="facts">
        <h2>Jon Fun Fact # {factNumber}</h2>
        <p>{fact}</p>
      </FactWrapper>
      <NavWrapper id="navs">
        <ul>
          <li
            id="navItem"
            role="presentation"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleMenu(e)}
            onClick={e => handleMenu(e)}
          >
            home
          </li>
          <li
            id="navItem"
            role="presentation"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleMenu(e)}
            onClick={e => handleMenu(e)}
          >
            resume
          </li>
          <li
            id="navItem"
            role="presentation"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleMenu(e)}
            onClick={e => handleMenu(e)}
          >
            blog
          </li>
          <li
            id="navItem"
            role="presentation"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleMenu(e)}
            onClick={e => handleMenu(e)}
          >
            projects
          </li>
          <li
            id="navItem"
            role="presentation"
            tabIndex="0"
            onKeyDown={e => e.code === "Enter" && handleMenu(e)}
            onClick={e => handleMenu(e)}
          >
            contact
          </li>
        </ul>
      </NavWrapper>
    </MenuWrapper>
  );
}
