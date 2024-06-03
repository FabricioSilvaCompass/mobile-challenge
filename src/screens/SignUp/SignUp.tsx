import React, {useContext, useEffect} from 'react';
import {
  BodyTitle,
  ButtonSignUp,
  CentralImage,
  Container,
  ContentBody,
  Description,
  ErrorMessage,
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
import AuthContext from '../../contexts/auth';
import axios from 'axios';
import {Alert} from 'react-native';

const SignUp: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const {signUp} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  async function handleSignUp(data: any) {
    try {
      const response = await signUp(data);
      navigation.navigate('Login');
      Alert.alert('Sucesso', 'conta foi criada com sucesso');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          Alert.alert('', 'Username already registered');
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
            name="fullname"
            rules={{
              required: 'Nome obrigatório',
            }}
            render={({field: {onChange, value}}) => (
              <Input
                style={{borderColor: errors.fullname ? 'red' : 'black'}}
                isPassword={false}
                lable="Full name"
                placeholder="Full name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.fullname && (
            <ErrorMessage style={{color: errors.fullname ? 'red' : 'black'}}>
              {errors.fullname?.message?.toString()}
            </ErrorMessage>
          )}

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
                placeholder="ex: user@example.com"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.userid && (
            <ErrorMessage style={{color: errors.userid ? 'red' : 'black'}}>
              {errors.userid?.message?.toString()}
            </ErrorMessage>
          )}
          <Controller
            control={control}
            name="birthdate"
            rules={{
              required: 'birthdate obrigatório',
              pattern: {
                message: 'birthday invalido',
                value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
              },
            }}
            render={({field: {onChange, value}}) => (
              <Input
                isPassword={false}
                lable="Birth Date"
                style={{borderColor: errors.birthdate ? 'red' : 'black'}}
                placeholder="yyyy - mm - dd"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.birthdate && (
            <ErrorMessage style={{color: errors.birthdate ? 'red' : 'black'}}>
              {errors.birthdate?.message?.toString()}
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
                placeholder="Password"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && (
            <ErrorMessage style={{color: errors.password ? 'red' : 'black'}}>
              {errors.password?.message?.toString()}
            </ErrorMessage>
          )}
        </Form>
        <ButtonSignUp onPress={handleSubmit(handleSignUp)}>
          <TextSignUpButton>Create Account</TextSignUpButton>
        </ButtonSignUp>
      </ContentBody>
    </Container>
  );
};

export default SignUp;
