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
  flex: 3;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  width: auto;
  align-items: stretch;
  justify-content: space-between;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  background-color: black;
  border-radius: 8px;
  height: 56px;
  align-items: 'center';
  justify-content: center;
  margin: 10px;
`;

export const TextSignUpButton = styled.Text`
  color: white;
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

export const NameField = styled.View`
  justify-content: center;
  flex-direction: row;
`;
