import React from 'react';
import NavBar from '../NavBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper />
    </Container>
  );
};

export default Layout;
