import { Box, IconButton } from 'common/components';
import { ReactComponent as ArrowLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/chevron-right.svg';

export default function DateSelector() {
  return (
    <Box
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="softRound"
      display="flex"
      alignItems="center"
      height="3.5rem"
      py={3}
      px={2}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton>
          <ArrowLeft />
        </IconButton>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box fontSize={2} lineHeight="1.5rem" fontWeight="600">
            October
          </Box>
          <Box fontSize={2} lineHeight="1.5rem" fontWeight="400">
            2021
          </Box>
        </Box>
        <IconButton>
          <ArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
