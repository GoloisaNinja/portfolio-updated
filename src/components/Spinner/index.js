import React from "react";
import { SpinnerWrapper, SpinnerOverlay } from "./styles";

export function Spinner({ show }) {
  return (
    show && (
      <>
        <SpinnerWrapper></SpinnerWrapper>
        <SpinnerOverlay></SpinnerOverlay>
      </>
    )
  );
}
