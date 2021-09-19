import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  opacity,
  position,
  space,
  typography,
} from 'styled-system';

const BaseButton = styled('button')`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${opacity}
  ${position}
  ${space}
  ${typography}
`;

BaseButton.displayName = 'BaseButton';

export default BaseButton;
