import React from 'react';
import {Container, Description, Title} from './styles';

interface Props {
  title: string;
  description: string;
}

export default function Descriptions(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
}
