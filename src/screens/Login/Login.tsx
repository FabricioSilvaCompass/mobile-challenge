import React, {useContext} from 'react';
import Input from '../../components/Input/Input';
import {
  BodyTitle,
  ButtonCreateAccount,
  ButtonLogin,
  CentralImage,
  Container,
  ContentBody,
  Description,
  ErrorMessage,
  Form,
  Header,
  Logo,
  Or,
  TextCreateAccount,
  TextLogin,
  Title,
} from './styles';
import AuthContext from '../../contexts/auth';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/auth.routes';
import axios from 'axios';
import {Alert} from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const {login} = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  async function handleLogin(data: any) {
    try {
      const response = await login(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          Alert.alert('', 'Incorrect username or password');
        } else {
          Alert.alert('error', error.response?.data);
        }
      }
    }
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
          elevation: 20,
        }}>
        <BodyTitle>Access your account</BodyTitle>
        <Description>
          Welcome to My Statement, please fill in the fields below to log into
          your account.
        </Description>
        <Form>
          <Controller
            control={control}
            name="userid"
            rules={{
              required: 'User ID obrigatório',
              pattern: {
                message: 'User ID inválido',
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              },
            }}
            render={({field: {onChange, value}}) => (
              <Input
                lable="UserID"
                isPassword={false}
                style={{borderColor: errors.userid ? 'red' : 'black'}}
                onChangeText={onChange}
                value={value}
                placeholder="UserID"></Input>
            )}
          />
          {errors.userid && (
            <ErrorMessage style={{color: errors.userid ? 'red' : 'black'}}>
              {errors.userid?.message?.toString()}
            </ErrorMessage>
          )}
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'password obrigatório',
            }}
            render={({field: {onChange, value}}) => (
              <Input
                lable="Password"
                isPassword={true}
                style={{borderColor: errors.password ? 'red' : 'black'}}
                onChangeText={onChange}
                value={value}
                placeholder="Password"></Input>
            )}
          />
          {errors.password && (
            <ErrorMessage style={{color: errors.password ? 'red' : 'black'}}>
              {errors.password?.message?.toString()}
            </ErrorMessage>
          )}
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
