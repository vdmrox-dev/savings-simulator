import {
  useSimulationContext,
  setReachDate,
  setDeposits,
  setTotalAmount,
} from '../context/simulation';

import {
  Box,
  DateSelector,
  FormField as Amount,
  FormField as ReachDate,
  Input,
} from 'common/components';

export default function SimsForm({ ...props }) {
  const [, dispatchSimulationAction] = useSimulationContext();

  const handleDateCallback = (data) => {
    dispatchSimulationAction(setDeposits(data.monthsDuration));
    dispatchSimulationAction(
      setReachDate(`${data.selectedMonth} ${data.selectedYear}`)
    );
  };

  const handleInputChange = (value) => {
    dispatchSimulationAction(setTotalAmount(value));
  };

  return (
    <Box
      {...props}
      display={['block', null, 'flex']}
      justifyContent="space-between"
    >
      <Amount
        width={[1, null, 7 / 12]}
        label="Total amount"
        field={
          <Input
            onChangeCallback={(value) => {
              handleInputChange(value);
            }}
            isCurrency
          />
        }
        mr={3}
      />
      <ReachDate
        mt={[3, null, 0]}
        width={[1, null, 5 / 12]}
        label="Reach goal by"
        field={
          <DateSelector onDateChange={(data) => handleDateCallback(data)} />
        }
      />
    </Box>
  );
}
