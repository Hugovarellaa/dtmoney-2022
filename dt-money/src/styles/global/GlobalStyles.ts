import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]};
  }

  body {
    background: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body , input, button, textarea { 
    font: 400 1rem Roboto, sans-serif;
  }

`