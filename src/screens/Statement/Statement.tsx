import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Balance, Container, ContentBody, SearchBar} from './styles';
import Transactions from '../../components/Transactions/Transactions';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/statement.routes';
import {transactions} from '../../utils/mocks';

const Statement: React.FC = () => {
  const navitation = useNavigation<StackTypes>();

  const transactionsList = transactions;

  return (
    <Container>
      <Balance>R$14.159,35</Balance>
      <SearchBar
        placeholder="Search in all fields"
        style={{elevation: 5}}></SearchBar>
      <ContentBody
        style={{
          elevation: 5,
        }}>
        <FlatList
          data={transactionsList}
          renderItem={({item}) => (
            <Transactions
              Type={item.type}
              to_user={item.to_user}
              date={item.created_at}
              value={'R$ ' + item.amount}
              id={item.id.toString()}
              onPress={() => {
                navitation.navigate('PaySlip');
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
      </ContentBody>
    </Container>
  );
};
export default Statement;
