import React from 'react';

import { DropdownProvider } from '../../hooks';

import { Products, Developers, Company } from '../Content';
import { DropdownOption } from '../Dropdown';
import { Container, DropdownStyles } from './styles';

function NavBar() {
  return (
    <DropdownProvider>

      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" content={Products} />
            </li>
            <li>
              <DropdownOption name="Desenvolvedores" content={() => Developers} />
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company} />
            </li>
          </ul>
        </Container>
      </DropdownStyles>

    </DropdownProvider>
  );
}

export default NavBar;
