import { Card, CardHeader } from 'common/components';
import SimsForm from './SimsForm';
import { ReactComponent as BuyHouse } from 'assets/icons/house-icon.svg';

export default function SimsWrapper() {
  return (
    <Card>
      <CardHeader
        icon={<BuyHouse />}
        title="Buy a house"
        subTitle="Saving goal"
      />
      <SimsForm mt={5} />
    </Card>
  );
}
