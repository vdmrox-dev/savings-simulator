import { Box, Input } from 'common/components';

export default function SimsForm({ ...props }) {
  return (
    <Box {...props}>
      <Input isCurrency />
    </Box>
  );
}
