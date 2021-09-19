import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BaseButton } from 'common/components';

const StyledIconButton = styled(BaseButton).attrs(() => ({
  pt: 1,
}))`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
`;

export default function IconButton({ children }) {
  return <StyledIconButton>{children}</StyledIconButton>;
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};
