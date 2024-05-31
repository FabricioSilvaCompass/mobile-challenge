import React from 'react';
import {
  BodyTitle,
  ButtonSignUp,
  CentralImage,
  Container,
  ContentBody,
  Description,
  Form,
  Header,
  Logo,
  TextSignUpButton,
  Title,
} from './styles';
import Input from '../../components/Input/Input';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/auth.routes';

const SignUp: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  function handleSignUp(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/Logo-Compass.png')}></Logo>
        <Title>My statement</Title>
        <CentralImage
          source={require('../../assets/undraw_welcome.png')}></CentralImage>
        <Description>Track your statement and account balance</Description>
      </Header>
      <ContentBody
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 5,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        }}>
        <BodyTitle>Create your Account</BodyTitle>

        <Form>
          <Controller
            control={control}
            name="FullName"
            render={({field: {onChange, value}}) => (
              <Input
                lable="Full name"
                placeholder="Full name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="E-mail"
            render={({field: {onChange, value}}) => (
              <Input
                lable="E-mail"
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="Password"
            render={({field: {onChange, value}}) => (
              <Input
                lable="Password"
                placeholder="Password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="Confirm Password"
            render={({field: {onChange, value}}) => (
              <Input
                lable="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </Form>
        <ButtonSignUp onPress={handleSubmit(handleSignUp)}>
          <TextSignUpButton>Create Account</TextSignUpButton>
        </ButtonSignUp>
      </ContentBody>
    </Container>
  );
};

export default SignUp;
