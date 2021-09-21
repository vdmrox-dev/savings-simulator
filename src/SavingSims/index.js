import { Box, Text } from 'common/components';
import SimsWrapper from './components/SimsWrapper';
import { SimulationProvider } from './context/simulation';

export default function SavingSims() {
  return (
    <SimulationProvider>
      <Box>
        <Text
          fontSize={[3, null, 4]}
          pb={4}
          color="brandColorPrimary"
          textAlign="center"
        >
          Let&apos;s plan your{' '}
          <Text as="span" fontWeight="600">
            saving goal.
          </Text>
        </Text>
        <SimsWrapper />
      </Box>
    </SimulationProvider>
  );
}
