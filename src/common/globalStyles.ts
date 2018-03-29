import { injectGlobal } from "styled-components";

import regularWoff from "./assets/fonts/Inter-UI-Regular.woff";
import regularWoff2 from "./assets/fonts/Inter-UI-Regular.woff2";
import italicWoff from "./assets/fonts/Inter-UI-Italic.woff";
import italicWoff2 from "./assets/fonts/Inter-UI-Italic.woff2";
import boldWoff from "./assets/fonts/Inter-UI-Bold.woff";
import boldWoff2 from "./assets/fonts/Inter-UI-Bold.woff2";

injectGlobal`
  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 400;
    src: url(${regularWoff2}) format("woff2"),
        url(${regularWoff}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  italic;
    font-weight: 400;
    src: url(${italicWoff2}) format("woff2"),
        url(${italicWoff}) format("woff");
  }

  @font-face {
    font-family: 'Inter UI';
    font-style:  normal;
    font-weight: 700;
    src: url(${boldWoff2}) format("woff2"),
        url(${boldWoff}) format("woff");
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Inter UI", sans-serif;
    background-color: #fafafa;
  }
`;
