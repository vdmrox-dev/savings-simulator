import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BaseButton } from 'common/components';

const StyledButton = styled(BaseButton).attrs(() => ({
  p: 3,
  border: 'none',
  borderRadius: 'roundedEnd',
  bg: 'brandColorPrimary',
  width: '320px',
  color: 'neutralWhite',
  fontSize: 2,
  fontWeight: '600',
}))`
  text-align: center;
`;

StyledButton.displayName = 'Button';

export default function Button({ label }) {
  return <StyledButton>{label}</StyledButton>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
