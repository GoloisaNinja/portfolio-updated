import React, { useState } from "react";
import { useLocation, navigate } from "@reach/router";
import smoothscroll from "smoothscroll-polyfill";
import { Menu } from "../Menu";
import { useIsMounted } from "../../hooks/useIsMounted";
import {
  HeaderWrapper,
  HamburgerWrapper,
  MenuLine,
  NavLinkWrapper,
} from "./styles";

export function Header() {
  const isMounted = useIsMounted();
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const navs = document.getElementById("navs");
    if (showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      navs.classList.add("show");
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      navs.classList.remove("show");
    }
  };

  const handleHeaderLink = target => {
    if (pathname !== "/") {
      navigate(`/#${target}`);
    } else {
      handleNav(target, true);
    }
  };

  const handleNav = async (target, notHamburger) => {
    if (isMounted) {
      smoothscroll.polyfill();
      const navTo = document.getElementById(target);
      const menuBtn = document.getElementById("menuBtn");
      const menu = document.getElementById("menu");
      const navs = document.getElementById("navs");
      if (!notHamburger) {
        setShowMenu(true);
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        navs.classList.remove("show");
      }
      const yOffset = -25;
      const y =
        navTo?.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.log(`didn't mount in time`);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <div>
          <NavLinkWrapper>
            <button onClick={e => handleHeaderLink("about")}>About</button>
            <button onClick={e => handleHeaderLink("blog")}>Blog</button>
            <button onClick={e => handleHeaderLink("projects")}>
              Projects
            </button>
            <button onClick={e => handleHeaderLink("contact")}>Contact</button>
          </NavLinkWrapper>
        </div>
      </HeaderWrapper>
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
      <Menu handleNav={handleNav}></Menu>
    </>
  );
}
