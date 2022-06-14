import React from "react";
import { ArticleContextProvider } from "./src/context/ArticleContext";
import { GlobalStyle } from "./src/components/globalStyles";

export const wrapRootElement = ({ element }) => (
  <ArticleContextProvider>{element}</ArticleContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

// on render body example of how we might add a recaptcha script to the head componennt
// export const onRenderBody = ({ setHeadComponents }) => {
//   setHeadComponents([
//     <script
//       key="1"
//       src="https://www.google.com/recaptcha/api.js"
//       async
//       defer
//     ></script>,
//   ]);
// };

// export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
//   setHeadComponents([<link key="1" rel="stylesheet" href={"prism.css"} />]);
//   setPostBodyComponents([<script key="2" src={"prism.js"}></script>]);
// };
