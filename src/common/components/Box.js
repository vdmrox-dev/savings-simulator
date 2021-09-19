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

const Box = styled('div')`
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

Box.displayName = 'Box';

Box.defaultProps = {
  as: 'div',
};

Box.propTypes = {
  as: PropTypes.oneOf([
    'aside',
    'article',
    'div',
    'dd',
    'dl',
    'dt',
    'figure',
    'footer',
    'header',
    'hgroup',
    'label',
    'li',
    'main',
    'span',
    'nav',
    'section',
  ]),
};

export default Box;
