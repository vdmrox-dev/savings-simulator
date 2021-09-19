import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './common/GlobalStyle';
import { theme } from './common/theme';

import Header from './common/components/Header';
import Container from './common/components/Container';
import SavingSims from './SavingsSims';

export default function App() {
  WebFont.load({
    google: {
      families: ['Work Sans:300,400,500,600', 'Rubik:300,400,500,600'],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container display="flex" justifyContent="center" pt="5">
        <SavingSims />
      </Container>
    </ThemeProvider>
  );
}
