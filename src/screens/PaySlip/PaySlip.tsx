import React from 'react';
import {
  Container,
  ContentBody,
  Footer,
  ShareButton,
  TextShareButton,
  Title,
  TitleBox,
} from './styles';
import Descriptions from '../../components/Description/Descriptions';

export default function PaySlip() {
  return (
    <Container>
      <ContentBody style={{elevation: 5}}>
        <TitleBox>
          <Title>Comprovante</Title>
        </TitleBox>
        <Descriptions
          title="Tipo de movimentação"
          description="Tranferencia enviada"></Descriptions>
        <Descriptions title="Valor" description="R$ 100.00"></Descriptions>
        <Descriptions title="Recebedor" description="David Bond"></Descriptions>
        <Descriptions
          title="Instituição Bancaria"
          description="Banco Phi"></Descriptions>
        <Descriptions title="Data/Hora" description="20/08"></Descriptions>
        <Descriptions
          title="Autenticação"
          description="665145415254263418532"></Descriptions>
      </ContentBody>
      <Footer style={{elevation: 5}}>
        <ShareButton>
          <TextShareButton>Share</TextShareButton>
        </ShareButton>
      </Footer>
    </Container>
  );
}
