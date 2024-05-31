import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const ContentBody = styled.View`
  background-color: white;
  padding: 10px;
  margin: 20px;
  padding: 10px;
  border-radius: 6px;
`;

export const TitleBox = styled.View`
  border-color: black;
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Footer = styled.View`
  background-color: white;
  height: 80px;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #ffce00;
  border-radius: 1px;
  height: 40px;
  align-items: 'center';
  justify-content: center;
  margin: 10px;
`;
export const TextShareButton = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
`;
