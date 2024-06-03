import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Container, Lable, InputBox, InputContainer, Touchable} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props extends TextInputProps {
  lable: string;
  isPassword: boolean;
}
export default function Input({lable, isPassword, ...rest}: Props) {
  const [secure, setSecure] = useState(isPassword);

  function switchButton() {
    setSecure(!secure);
  }

  return (
    <Container>
      <Lable>{lable}</Lable>
      <InputContainer>
        <InputBox secureTextEntry={secure} {...rest} />
        {isPassword && (
          <Touchable onPress={switchButton}>
            <Icon
              name={secure ? 'eyeo' : 'eye'}
              size={20}
              style={{marginRight: 10}}></Icon>
          </Touchable>
        )}
      </InputContainer>
    </Container>
  );
}
