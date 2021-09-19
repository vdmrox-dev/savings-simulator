import styled from 'styled-components';

import { Box } from 'common/components';

const Card = styled(Box).attrs(() => ({
  p: 5,
  bg: 'neutralWhite',
  boxShadow: 0,
  borderRadius: 'roundedCorner',
}))``;

export default Card;
