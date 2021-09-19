import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'common/GlobalStyle';
import { theme } from 'common/theme';

import { Container, Header } from 'common/components';
import SavingSims from 'SavingsSims';

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
      <Container display="flex" justifyContent="center" pt={7}>
        <SavingSims />
      </Container>
    </ThemeProvider>
  );
}
