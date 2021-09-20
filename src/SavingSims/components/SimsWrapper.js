import { Box, Card, CardHeader, Button } from 'common/components';

import { ReactComponent as BuyHouse } from 'assets/icons/house-icon.svg';
import SimsForm from './SimsForm';
import SimsResult from './SimsResult';

export default function SimsWrapper() {
  return (
    <Card>
      <CardHeader
        icon={<BuyHouse />}
        title="Buy a house"
        subTitle="Saving goal"
      />
      <SimsForm mt={4} />
      <SimsResult monthlyAmount={521} mt={4} />
      <Box width="100%" textAlign="center" mt={5}>
        <Button mx="auto" label="Confirm" />
      </Box>
    </Card>
  );
}
