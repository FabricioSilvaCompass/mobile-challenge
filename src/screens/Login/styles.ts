import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  background-color: #8e48ec;
  flex-grow: 1;
`;
export const Header = styled.View`
  justify-content: center;
  flex: 1;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const ContentBody = styled.View`
  flex: 2;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  width: auto;
  align-items: stretch;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: black;
  border-radius: 8px;
  height: 56px;
  align-items: 'center';
  justify-content: center;
  margin: 10px;
`;

export const TextLogin = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  background-color: white;
  border-radius: 8px;
  border-color: gray;
  border-width: 1px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const TextCreateAccount = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Or = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const BodyTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  color: black;
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 10px;
  color: black;
`;
