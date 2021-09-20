import PropType from 'prop-types';
import NumberFormat from 'react-number-format';

import { Box, Text } from 'common/components';

export default function SimsResult({ monthlyAmount, ...props }) {
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
          fontSize={6}
        >
          <NumberFormat
            displayType="text"
            value={monthlyAmount}
            prefix="$"
            thousandSeparator=","
            decimalSeparator="."
          />
        </Text>
      </Box>
      <Box pt={4} textAlign={['center', null, 'left']}>
        <Text fontSize={0} lineHeight="1rem">
          You’re planning{' '}
          <Text as="span" fontWeight="600">
            48 monthly deposits
          </Text>{' '}
          to reach your{' '}
          <Text as="span" fontWeight="600">
            $25,000
          </Text>{' '}
          goal by{' '}
          <Text as="span" fontWeight="600">
            October&nbsp;2020.
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

SimsResult.propTypes = {
  monthlyAmount: PropType.number.isRequired,
};
