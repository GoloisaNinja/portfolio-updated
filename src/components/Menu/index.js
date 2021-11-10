import React from "react";
import { useLocation, navigate } from "@reach/router";
import { NavWrapper, NavButton } from "./styles";

export function Menu({ handleNav }) {
  const { pathname } = useLocation();
  const checkLocation = target => {
    if (pathname !== "/") {
      navigate(`/#${target}`);
    } else {
      handleNav(target, false);
    }
  };

  const handleMenu = e => {
    checkLocation(e.target.innerHTML);
  };
  return (
    <NavWrapper id="navs">
      <NavButton
        id="navItem"
        tabIndex="0"
        onKeyDown={e => e.code === "Enter" && handleMenu(e)}
        onClick={e => handleMenu(e)}
      >
        about
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
  );
}
