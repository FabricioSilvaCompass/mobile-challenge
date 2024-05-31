import React from 'react';
import {BodyTitle, CentralImage, Container, Description} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <BodyTitle>Welcome to My Statement</BodyTitle>
      <CentralImage
        source={require('../../assets/undraw_welcome.png')}></CentralImage>
      <Description>
        Now that you are logged in, you can view your statement and change your
        profile. Enjoy!
      </Description>
    </Container>
  );
};

export default Dashboard;
