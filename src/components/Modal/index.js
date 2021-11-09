import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  ModalStyle,
  ModalTitle,
  ButtonDiv,
  ModalButton1,
  ModalButton2,
  ModalDismissButton1,
  ModalOverlay,
} from "./styles";

export function Modal({ show, handleDismiss, handleClose, content }) {
  return (
    show && (
      <>
        <ModalStyle>
          <div>
            <GatsbyImage image={content.icon} alt="robot love" />
          </div>
          <ModalTitle>{content.title}</ModalTitle>
          <p style={{ marginBottom: "2rem" }}>{content.body}</p>
          <ButtonDiv>
            {content.type === "decision" ? (
              <>
                <ModalButton1 onClick={e => handleClose(false)}>
                  cancel
                </ModalButton1>
                <ModalButton2 onClick={e => handleClose(true)}>
                  confirm
                </ModalButton2>
              </>
            ) : (
              <>
                <ModalDismissButton1 onClick={e => handleDismiss()}>
                  dismiss
                </ModalDismissButton1>
              </>
            )}
          </ButtonDiv>
        </ModalStyle>
        <ModalOverlay></ModalOverlay>
      </>
    )
  );
}
