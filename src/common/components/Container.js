import styled from 'styled-components';

import Box from './Box';

const gutter = 0.5;
const lgGutter = 1.75;

const Container = styled(Box).attrs(() => ({
  mx: 'auto',
  px: [`${gutter * 2}rem`, `${lgGutter * 2}rem`],
}))``;

export default Container;
