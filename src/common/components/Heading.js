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

const Heading = styled('h1')`
  ${color}
  ${layout}
  ${overflow}
  ${position}
  ${space}
  ${typography}
  font-size: ${(props) => props.fontSize || 4};
  font-weight: ${(props) => props.fontWeight || 500};
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  as: 'h1',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default Heading;
