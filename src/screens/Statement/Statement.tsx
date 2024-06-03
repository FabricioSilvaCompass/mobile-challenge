import {FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Balance, Container, ContentBody, SearchBar} from './styles';
import Transactions from '../../components/Transactions/Transactions';
import {useNavigation} from '@react-navigation/native';
import {PaySlipScreenProps} from '../../routes/statement.routes';

import AuthContext from '../../contexts/auth';

const Statement: React.FC = () => {
  const navitation = useNavigation<PaySlipScreenProps>();

  useEffect(() => {
    getStatements();
    getBalance();
  }, []);

  const {getStatements, getBalance, statements, balance} =
    useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <Balance>{'R$' + balance?.toFixed(2)}</Balance>
      <SearchBar
        onChangeText={setSearchValue}
        placeholder="Search in all fields"
        style={{elevation: 5}}></SearchBar>
      <ContentBody
        style={{
          elevation: 5,
        }}>
        <FlatList
          data={statements.filter(item => {
            if (searchValue === '') {
              return item;
            } else {
              return item.type
                .toLocaleLowerCase()
                .includes(searchValue.toLowerCase());
            }
          })}
          renderItem={({item}) => (
            <Transactions
              type={item.type}
              from_user={item.from_user}
              to_user={item.to_user}
              date={item.created_at}
              value={item.amount}
              id={item.id.toString()}
              style={{}}
              onPress={() => {
                navitation.navigate('PaySlip', {itemId: item.id});
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
