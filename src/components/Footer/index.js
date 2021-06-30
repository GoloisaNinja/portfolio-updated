import React from "react";
import { FaMugHot } from "react-icons/fa";
import { FooterWrapper } from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>
        Made with <FaMugHot /> by Jon Collins {currentYear}
      </p>
      <p>
        Modal Icon by <a href="https://www.freepik.com">FreePik</a>
      </p>
    </FooterWrapper>
  );
}
