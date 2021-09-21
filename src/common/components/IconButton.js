import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BaseButton } from 'common/components';

const StyledIconButton = styled(BaseButton).attrs(() => ({
  pt: 1,
}))`
  appearance: none;
  border: none;
  background: none;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
`;

export default function IconButton({ children, ...props }) {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};
