import React from 'react';
import Input from '../../components/Input/Input';
import {
  BodyTitle,
  ButtonCreateAccount,
  ButtonLogin,
  Container,
  ContentBody,
  Description,
  Header,
  Or,
  TextCreateAccount,
  TextLogin,
  Title,
} from './styles';

const Login: React.FC = () => {
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
        <Input name="E-mail"></Input>
        <Input name="Password"></Input>
        <ButtonLogin>
          <TextLogin>Log in</TextLogin>
        </ButtonLogin>
        <Or>or</Or>
        <ButtonCreateAccount>
          <TextCreateAccount>Create Account</TextCreateAccount>
        </ButtonCreateAccount>
      </ContentBody>
    </Container>
  );
};

export default Login;
