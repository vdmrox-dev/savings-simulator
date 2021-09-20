import Media from 'react-media';

import { Box } from 'common/components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export default function Header() {
  return (
    <Box py={[3, null, 4]} px={[3, null, 8]} bg="neutralWhite">
      <Media
        queries={{
          md: '(min-width: 40em)',
        }}
      >
        {(matches) => <>{matches.md ? <Logo /> : <Logo width="4.5rem" />}</>}
      </Media>
    </Box>
  );
}
