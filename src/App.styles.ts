import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 1.25rem;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 4rem;
    text-align: center;
    margin: 1.25rem;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    height: 2.5rem;
    margin: 1.25rem 0;
    padding: 0 2.5rem;
  }

  .start {
    max-width: 12rem;
  }
`;