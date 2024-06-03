import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: white;
  flex-grow: 1;
`;

export const Header = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 4;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const Logo = styled.Image`
  margin: 15px;
`;

export const CentralImage = styled.Image`
  width: 137px;
  height: 109px;
  margin: 10px;
`;

export const ContentBody = styled.View`
  flex: 6;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  width: auto;
  align-items: stretch;
  justify-content: center;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  background-color: #ffce00;
  border-radius: 4px;
  height: 40px;
  align-items: 'center';
  justify-content: center;
  margin: 10px;
`;

export const TextSignUpButton = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
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
export const Form = styled.View``;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  margin-left: 10px;
`;
