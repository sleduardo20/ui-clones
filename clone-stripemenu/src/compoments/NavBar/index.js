import React from 'react';

import { DropdownOption } from '../Dropdown';
import { Container, DropdownStyles } from './styles';

function NavBar() {
  return (
    <DropdownStyles>

      <Container>
        <ul>
          <li>
            <DropdownOption name="Produtos" content={() => <h1>Produtos</h1>} />
          </li>
          <li>
            <DropdownOption name="Desenvolvedores" content={() => <h1>Desenvolvedores</h1>} />
          </li>
          <li>
            <DropdownOption name="Empresa" content={() => <h1>Empresa</h1>} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default NavBar;
