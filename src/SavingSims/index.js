import { Box, Text } from 'common/components';
import SimsWrapper from './components/SimsWrapper';

export default function SavingSims() {
  return (
    <Box>
      <Text fontSize={4} pb={4} color="brandColorPrimary" textAlign="center">
        Let&apos;s plan your{' '}
        <Text as="span" fontWeight="600">
          saving goal.
        </Text>
      </Text>
      <SimsWrapper />
    </Box>
  );
}
