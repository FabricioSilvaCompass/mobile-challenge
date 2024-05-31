import React from 'react';
import {
  CancelButton,
  Container,
  ContentBody,
  Footer,
  SaveButton,
  TextCancelButton,
  TextShareButton,
  Title,
} from './styles';
import Input from '../../components/Input/Input';
import {useNavigation} from '@react-navigation/native';
import {DrawerTypes} from '../../routes/app.routes';

export default function Profile() {
  const navigation = useNavigation<DrawerTypes>();
  return (
    <Container>
      <ContentBody style={{elevation: 5}}>
        <Title>User details</Title>
        <Input lable="User ID"></Input>
        <Input lable="Password"></Input>
        <Input lable="Full Name"></Input>
        <Input lable="Birthday"></Input>
      </ContentBody>
      <Footer style={{elevation: 5}}>
        <SaveButton>
          <TextShareButton>Save</TextShareButton>
        </SaveButton>
        <CancelButton
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <TextCancelButton>Cancel</TextCancelButton>
        </CancelButton>
      </Footer>
    </Container>
  );
}
