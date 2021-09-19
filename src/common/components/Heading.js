import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  layout,
  overflow,
  position,
  space,
  typography,
} from 'styled-system';

const Heading = styled('h1').attrs((props) => ({
  fontSize: props.fontSize || 5,
  fontWeight: props.fontWeight || 500,
}))`
  ${color}
  ${layout}
  ${overflow}
  ${position}
  ${space}
  ${typography}
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  as: 'h1',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default Heading;
