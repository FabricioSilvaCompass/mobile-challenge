import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const ContentBody = styled.View`
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  margin: 16px;
  padding: 10px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;
export const Footer = styled.View`
  background-color: white;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #ffce00;
  border-radius: 4px;
  height: 40px;
  align-items: 'center';
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextShareButton = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: white;
  border-color: #ffce00;
  border-width: 1px;
  border-radius: 1px;
  height: 40px;
  align-items: 'center';
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextCancelButton = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
`;
