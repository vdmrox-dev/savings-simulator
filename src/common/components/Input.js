import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { border, color, opacity, space, typography } from 'styled-system';

import { ReactComponent as Dollar } from 'assets/icons/dollar-sign.svg';
import { Box } from 'common/components';

const BaseInput = styled('input').attrs((props) => ({
  fontFamily: 'Rubik',
  fontWeight: '500',
  fontSize: props.fontSize || 5,
  color: 'blueGray600',
  border: 'none',
  type: props.type || 'text',
}))`
  ${border}
  ${color}
  ${opacity}
  ${space}
  ${typography}
  outline: none;
  width: 100%;
`;

function Input({ fontSize, isCurrency, type }) {
  return (
    <Box
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="softRound"
      display="flex"
      alignItems="center"
      p={3}
      height="3.5rem"
    >
      {isCurrency ? (
        <>
          <Box pr={3}>
            <Dollar />
          </Box>
          <NumberFormat
            thousandSeparator=","
            decimalSeparator="."
            customInput={BaseInput}
          />
        </>
      ) : (
        <BaseInput type={type} fontSize={fontSize} />
      )}
    </Box>
  );
}

Input.displayName = 'Input';

Input.defaultProps = {
  fontSize: 5,
  isCurrency: false,
  type: 'text',
};

Input.propTypes = {
  fontSize: PropTypes.number,
  isCurrency: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'email', 'text', 'tel', 'number', 'password']),
};

export default Input;
