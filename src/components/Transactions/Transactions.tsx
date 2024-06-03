import React from 'react';
import {
  Container,
  DateTransaction,
  DestinationTansaction,
  Row,
  TypeTransaction,
  ValueTransaction,
} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  type: string;
  value: string;
  date: string;
  to_user: string;
  from_user: string;
  id: string;
}

const Transactions: React.FC<Props> = ({
  type,
  value,
  date,
  to_user,
  from_user,
  id,

  ...rest
}: Props) => {
  function isTransactionPositive(): boolean {
    switch (type) {
      case 'Deposit':
        return true; // Always positive for Deposit
      case 'Withdrawal':
        return from_user !== to_user; // Negative if withdrawing from own account
      case 'Transfer':
        return from_user === to_user; // Positive if transferring to own account
      default:
        return false; // In case of an unknown type, consider it negative
    }
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}`;
  }

  return (
    <Container {...rest}>
      <Row>
        <TypeTransaction>{type}</TypeTransaction>
        <ValueTransaction positive={isTransactionPositive()}>
          {(isTransactionPositive() ? '' : '-') + 'R$ ' + value}
        </ValueTransaction>
      </Row>
      <Row>
        <DestinationTansaction>{to_user}</DestinationTansaction>
        <DateTransaction>{formatDate(date)}</DateTransaction>
      </Row>
    </Container>
  );
};
export default Transactions;
