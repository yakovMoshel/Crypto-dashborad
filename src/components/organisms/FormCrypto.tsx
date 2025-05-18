import { Form, useNavigation } from 'react-router-dom';
import Input from '../atoms/input';
import Label from '../atoms/Label';
import Button from '../atoms/Button';

export default function FormCrypto() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post">
        <div className="form-control">
          <Label htmlFor="name">Name:</Label>
          <Input id='name' type="text" required />
        </div>
        <div>
          <Label htmlFor="symbol">Symbol:</Label>
          <Input type="text" name="symbol" id="symbol" required />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add to Watchlist'}
        </Button>
      </Form>
    </>
  );
}
