import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import { Container, Wraper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wraper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wraper>
    </Container>
  );
};

export default Layout;
