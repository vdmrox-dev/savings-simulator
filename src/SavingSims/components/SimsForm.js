import {
  Box,
  DateSelector,
  FormField as Amount,
  FormField as ReachDate,
  Input,
} from 'common/components';

export default function SimsForm({ ...props }) {
  return (
    <Box {...props} display="flex" justifyContent="space-between">
      <Amount
        width={7 / 12}
        label="Total amount"
        field={<Input isCurrency />}
        mr={3}
      />
      <ReachDate
        width={5 / 12}
        label="Reach goal by"
        field={<DateSelector />}
      />
    </Box>
  );
}
