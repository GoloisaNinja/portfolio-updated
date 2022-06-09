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
