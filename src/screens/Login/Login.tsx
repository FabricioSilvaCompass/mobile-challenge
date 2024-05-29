import React, {useContext} from 'react';
import Input from '../../components/Input/Input';
import {
  BodyTitle,
  ButtonCreateAccount,
  ButtonLogin,
  Container,
  ContentBody,
  Description,
  Form,
  Header,
  Or,
  TextCreateAccount,
  TextLogin,
  Title,
} from './styles';
import AuthContext from '../../contexts/auth';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/auth.routes';

const Login: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const {signed, login} = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  function handleLogin(data: any) {
    console.log(data);
    login();
  }

  return (
    <Container>
      <Header>
        <Title>MY STATEMENT</Title>
      </Header>
      <ContentBody>
        <BodyTitle>Log in</BodyTitle>
        <Description>
          Welcome to My Statement, please fill in the fields below to log into
          your account.
        </Description>
        <Form>
          <Controller
            control={control}
            name="E-mail"
            render={({field: {onChange, value}}) => (
              <Input
                lable="E-mail"
                onChangeText={onChange}
                value={value}
                placeholder="E-mail"></Input>
            )}
          />
          <Controller
            control={control}
            name="Password"
            render={({field: {onChange, value}}) => (
              <Input
                lable="Password"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                placeholder="Password"></Input>
            )}
          />
        </Form>
        <ButtonLogin onPress={handleSubmit(handleLogin)}>
          <TextLogin>Log in</TextLogin>
        </ButtonLogin>
        <Or>or</Or>
        <ButtonCreateAccount
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <TextCreateAccount>Create Account</TextCreateAccount>
        </ButtonCreateAccount>
      </ContentBody>
    </Container>
  );
};

export default Login;
