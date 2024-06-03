import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: white;
  flex: 1;
`;
export const Header = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 5;
`;

export const Logo = styled.Image`
  margin: 15px;
`;

export const CentralImage = styled.Image`
  width: 247px;
  height: 201px;
  margin: 10px;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const ContentBody = styled.View`
  flex: 6;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  width: auto;
  justify-content: space-around;
`;

export const Form = styled.View``;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #ffce00;
  border-radius: 1px;
  height: 40px;
  align-items: 'center';
  justify-content: center;
  margin: 10px;
`;

export const TextLogin = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  border-color: gray;
  border-width: 1px;
  height: 40px;
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

export const ErrorMessage = styled.Text`
  font-size: 14px;
  margin-left: 10px;
`;
