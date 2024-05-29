import React from 'react';
import {
  BodyTitle,
  ButtonSignUp,
  Container,
  ContentBody,
  Description,
  Form,
  Header,
  NameField,
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
        <Title>MY STATEMENT</Title>
      </Header>
      <ContentBody>
        <BodyTitle>Create Account</BodyTitle>
        <Description>
          Please fill in the fields below to create an account.
        </Description>
        <Form>
          <NameField>
            <Controller
              control={control}
              name="Lastname"
              render={({field: {onChange, value}}) => (
                <Input
                  lable="Last name"
                  placeholder="Last name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="Firstname"
              render={({field: {onChange, value}}) => (
                <Input
                  lable="First name"
                  placeholder="First name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </NameField>
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
