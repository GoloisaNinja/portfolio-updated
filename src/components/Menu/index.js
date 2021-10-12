import React from "react";
import { useLocation, navigate } from "@reach/router";
import { MenuWrapper, FactWrapper, NavWrapper, NavButton } from "./styles";

export function Menu({ fact, factNumber, handleNav }) {
  const { pathname } = useLocation();
  const checkLocation = target => {
    if (pathname !== "/") {
      navigate(`/`);
      handleNav(target, true);
    } else {
      handleNav(target, false);
    }
  };

  const handleMenu = e => {
    checkLocation(e.target.innerHTML);
  };
  return (
    <MenuWrapper id="menu">
      <FactWrapper id="facts">
        <h2>Jon Fun Fact # {factNumber}</h2>
        <p>{fact}</p>
      </FactWrapper>
      <NavWrapper id="navs">
        <NavButton
          aria-label="menu button for the home section of the portfolio site"
          id="navItem"
          tabIndex="0"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          home
        </NavButton>
        <NavButton
          aria-label="menu button for the resume section of the portfolio site"
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          resume
        </NavButton>
        <NavButton
          aria-label="menu button for the blog section of the portfolio site"
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          blog
        </NavButton>
        <NavButton
          aria-label="menu button for the projects and work section of the portfolio site"
          id="navItem"
          onKeyDown={e => e.code === "Enter" && handleMenu(e)}
          onClick={e => handleMenu(e)}
        >
          projects
        </NavButton>
        <NavButton
          aria-label="menu button for the contact section of the portfolio site"
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
