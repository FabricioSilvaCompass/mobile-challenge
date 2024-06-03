import React, {useContext} from 'react';
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
import {RootStackParamsList} from '../../routes/statement.routes';
import {StackScreenProps} from '@react-navigation/stack';
import AuthContext from '../../contexts/auth';

export type PaySlipProps = StackScreenProps<RootStackParamsList, 'PaySlip'>;

export default function PaySlip({navigation, route}: PaySlipProps) {
  const {statements} = useContext(AuthContext);

  const statement = statements.find(item => {
    return item.id == route.params.itemId;
  });
  return (
    <Container>
      <ContentBody style={{elevation: 5}}>
        <TitleBox>
          <Title>Comprovante </Title>
        </TitleBox>
        <Descriptions
          title="Tipo de movimentação"
          description={statement!.type}></Descriptions>
        <Descriptions
          title="Valor"
          description={'R$ ' + statement?.amount}></Descriptions>
        <Descriptions
          title="Recebedor"
          description={statement!.to_user}></Descriptions>
        <Descriptions
          title="Instituição Bancaria"
          description={statement!.bank_name}></Descriptions>
        <Descriptions
          title="Data/Hora"
          description={statement!.created_at}></Descriptions>
        <Descriptions
          title="Autenticação"
          description={statement!.authentication}></Descriptions>
      </ContentBody>
      <Footer style={{elevation: 5}}>
        <ShareButton>
          <TextShareButton>Share</TextShareButton>
        </ShareButton>
      </Footer>
    </Container>
  );
}
