import styled from 'styled-components/native';

type ValueTransaction = {
  negative: boolean;
};

export const Container = styled.TouchableOpacity`
  background-color: white;
  border-color: black;
  border-bottom-width: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TypeTransaction = styled.Text`
  color: black;
  font-size: 14px;
`;
export const ValueTransaction = styled.Text<ValueTransaction>`
  color: ${props => (props.negative ? 'red' : 'green')};
  font-size: 14px;
`;
export const DateTransaction = styled.Text`
  font-size: 14px;
  color: grey;
`;
export const DestinationTansaction = styled.Text`
  font-size: 14px;
  color: gray;
`;
