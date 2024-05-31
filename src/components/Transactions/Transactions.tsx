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
  Type: string;
  value: string;
  date: string;
  to_user: string;
  id: string;
}

const Transactions: React.FC<Props> = ({
  Type,
  value,
  date,
  to_user,
  id,

  ...rest
}: Props) => {
  const negative = value.includes('-') ? true : false;
  return (
    <Container {...rest}>
      <Row>
        <TypeTransaction>{Type}</TypeTransaction>
        <ValueTransaction negative={negative}>{value}</ValueTransaction>
      </Row>
      <Row>
        <DestinationTansaction>{to_user}</DestinationTansaction>
        <DateTransaction>{date}</DateTransaction>
      </Row>
    </Container>
  );
};
export default Transactions;
