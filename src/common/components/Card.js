import styled from 'styled-components';

import { Box } from 'common/components';

const Card = styled(Box).attrs(() => ({
  p: 6,
  bg: 'neutralWhite',
  boxShadow: 0,
  borderRadius: 'roundedCorner',
  width: ['100%', '560px'],
}))``;

export default Card;
