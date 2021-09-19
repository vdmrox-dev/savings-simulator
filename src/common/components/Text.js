import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

const Text = styled('p')`
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  as: 'p',
};

Text.propTypes = {
  as: PropTypes.oneOf([
    'a',
    'address',
    'dd',
    'dl',
    'dt',
    'label',
    'li',
    'p',
    'ol',
    'span',
    'ul',
  ]),
};

export default Text;
