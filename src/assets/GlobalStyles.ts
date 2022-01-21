import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    z-index: 1;
  }

  body {background-color: #050505;}

  button {cursor: pointer;}

  img {pointer-events: none;}

  button, a, ul, ol, input {
    outline: none;
    border: none;
    text-decoration: none;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {background-color: #606090;}
  
  .pixel {
    width: 0.825rem;
    margin: 0 2px 2px 0;
    height: 0.825rem;
    cursor: pointer;
    border-radius: 1px;
    background: #30303099;
    pointer-events: visible;
    user-select: none;
    -webkit-user-drag: none;
  }

  .finish-popup {
    
  }
`;