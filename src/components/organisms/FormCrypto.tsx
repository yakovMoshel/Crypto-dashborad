import { Form, useNavigation } from 'react-router-dom';
import Input from '../atoms/input';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import styles from '../../styles/FormCrypto.module.css';

export default function FormCrypto() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post" className={styles.formContainer}>
      <div className={styles.formGroup}>
        <Label htmlFor="name" className={styles.label}>Name:</Label>
        <Input id="name" name="name" type="text" required className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <Label htmlFor="symbol" className={styles.label}>Symbol:</Label>
        <Input type="text" name="symbol" id="symbol" required className={styles.input} />
      </div>

      <Button className={styles.button} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add to Watchlist'}
      </Button>

    </Form>
  );
}
