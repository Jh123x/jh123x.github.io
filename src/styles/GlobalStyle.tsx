"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.dark-theme {
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

body {
    margin: 0px;
    padding: 0px;
}

body::-webkit-scrollbar {
    width: 9px;
    background-color: #383838;
}

body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6b6b6b;
}

body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #383838;
}
`;

export default GlobalStyle;
