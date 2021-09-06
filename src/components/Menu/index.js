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
