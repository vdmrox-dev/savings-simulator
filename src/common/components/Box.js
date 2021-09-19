import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  background,
  border,
  boxShadow,
  color,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  space,
  typography,
} from 'styled-system';

const BoxWrapper = styled('div')`
  ${color}
  ${background}
  ${border}
  ${boxShadow}
  ${flexbox}
  ${grid}
  ${layout}
  ${opacity}
  ${overflow}
  ${position}
  ${space}
  ${typography}
`;

BoxWrapper.displayName = 'Box';

export default function Box({ children, ...props }) {
  return (
    <BoxWrapper as="div" {...props}>
      {children}
    </BoxWrapper>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
