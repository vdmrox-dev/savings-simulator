import styled from 'styled-components';

import { Box } from 'common/components';

const Card = styled(Box).attrs(() => ({
  bg: 'neutralWhite',
  boxShadow: 0,
  borderRadius: 'roundedCorner',
  width: ['100%', null, '560px'],
}))``;

export default Card;
