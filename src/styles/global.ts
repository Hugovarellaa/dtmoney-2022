import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]}
  }


  body {
    background-color: ${({ theme }) => theme["gray-800"]};;
    color: ${({ theme }) => theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, select , textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
