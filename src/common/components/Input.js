import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { border, color, opacity, space, typography } from 'styled-system';

import { ReactComponent as Dollar } from 'assets/icons/dollar-sign.svg';
import { Box } from 'common/components';

const BaseInput = styled('input').attrs((props) => ({
  fontFamily: 'Rubik',
  border: 'none',
  fontWeight: '500',
  color: 'blueGray600',
  type: props.type || 'text',
  fontSize: props.fontSize || 5,
}))`
  ${border}
  ${color}
  ${opacity}
  ${space}
  ${typography}
  outline: none;
`;

function Input({ type, fontSize, isCurrency, ...props }) {
  return (
    <Box
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="softRound"
      display="flex"
      alignItems="center"
      p={3}
    >
      {isCurrency && (
        <Box pr={3}>
          <Dollar />
        </Box>
      )}
      <NumberFormat
        thousandSeparator=","
        decimalSeparator="."
        customInput={BaseInput}
      />
    </Box>
  );
}

Input.displayName = 'Input';

Input.defaultProps = {
  isCurrency: false,
  fontSize: 5,
  type: 'text',
};

Input.propTypes = {
  isCurrency: PropTypes.bool,
  fontSize: PropTypes.number,
  type: PropTypes.oneOf(['date', 'email', 'text', 'tel', 'number', 'password']),
};

export default Input;
