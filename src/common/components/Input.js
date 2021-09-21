import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { border, color, opacity, space, typography } from 'styled-system';

import { ReactComponent as Dollar } from 'assets/icons/dollar-sign.svg';
import { Box } from 'common/components';

const BaseInput = styled('input').attrs((props) => ({
  fontFamily: 'Rubik',
  fontWeight: '500',
  fontSize: props.fontSize || [4, null, 5],
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

function Input({ fontSize, isCurrency, type, onChangeCallback, ...props }) {
  return (
    <Box
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="softRound"
      display="flex"
      alignItems="center"
      p={3}
      height="3.5rem"
      fontSize={fontSize}
      overflow="hidden"
    >
      {isCurrency ? (
        <>
          <Box pt={1} pr={3}>
            <Dollar />
          </Box>
          <NumberFormat
            onValueChange={(values) => onChangeCallback(values.value)}
            thousandSeparator=","
            decimalSeparator="."
            customInput={BaseInput}
            fixedDecimalScale={true}
            decimalScale={2}
            {...props}
          />
        </>
      ) : (
        <BaseInput
          onChange={(value) => onChangeCallback(value)}
          type={type}
          fontSize={fontSize}
          {...props}
        />
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
  onChangeCallback: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['date', 'email', 'text', 'tel', 'number', 'password']),
};

export default Input;
