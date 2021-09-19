import { Box, Text } from 'common/components';

export default function SavingSims() {
  return (
    <Box>
      <Text fontSize={4} fontFamily="Work Sans" color="brandColorPrimary">
        Let&apos;s plan your{' '}
        <Text as="span" fontWeight="600">
          saving goal.
        </Text>
      </Text>
    </Box>
  );
}
