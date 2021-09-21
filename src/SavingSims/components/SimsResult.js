import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

import { useSimulationContext } from '../context/simulation';

import { Box, Text } from 'common/components';

export default function SimsResult({ ...props }) {
  const [{ deposits, reachDate, totalAmount }] = useSimulationContext();
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const handleMonthlyAmount = () => {
    const divider = deposits === 0 ? 1 : deposits;
    const monthlyValue = totalAmount / divider;
    setMonthlyAmount(monthlyValue);
  };

  useEffect(() => {
    handleMonthlyAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount, deposits]);

  return (
    <Box
      px={[4, null, 5]}
      py={4}
      border="solid 1px"
      borderColor="blueGray50"
      borderRadius="roundedCorner"
      background="linear-gradient(180deg, #FFFFFF 50%, #F4F8FA 50%)"
      {...props}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb={[4]}
      >
        <Text fontSize={[3, null, 4]}>Monthly amount</Text>
        <Text
          fontFamily="Rubik"
          color="brandColorSecondary"
          fontWeight="500"
          fontSize={[5, null, 6]}
        >
          <NumberFormat
            displayType="text"
            value={monthlyAmount || 0}
            prefix="$"
            thousandSeparator=","
            decimalSeparator="."
            fixedDecimalScale={true}
            decimalScale={2}
          />
        </Text>
      </Box>
      <Box pt={4} textAlign={['center', null, 'left']}>
        <Text fontSize={0} lineHeight="1rem">
          You’re planning{' '}
          <Text as="span" fontWeight="600">
            {deposits} monthly deposits
          </Text>{' '}
          to reach your{' '}
          <Text as="span" fontWeight="600">
            <NumberFormat
              displayType="text"
              value={totalAmount || 0}
              prefix="$"
              thousandSeparator=","
              decimalSeparator="."
            />
          </Text>{' '}
          goal by
          <Text as="span" fontWeight="600">
            &nbsp;{reachDate}.
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
