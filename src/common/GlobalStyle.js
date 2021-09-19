import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
}

html {
  color: ${(props) => props.theme.colors.blueGray900};
  background-color: ${(props) => props.theme.colors.blueGray10};
  font-family: Rubik, 'Work Sans', sans-serif;
  font-size: 100%;
}

`;

export default globalStyle;
