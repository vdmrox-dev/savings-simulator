import { Box } from 'common/components';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export default function Header() {
  return (
    <Box py={4} px={8} bg="neutralWhite">
      <Logo />
    </Box>
  );
}