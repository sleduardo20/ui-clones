import React from 'react';

import { DropdownProvider } from '../../hooks';

import { Products, Developers, Company } from '../Content';
import { DropdownOption } from '../Dropdown';
import DropdownRoot from '../DropdownRoot';

import { Container, DropdownStyles } from './styles';

function NavBar() {
  return (
    <DropdownProvider>

      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" content={Products} backgroundHeight={286} />
            </li>
            <li>
              <DropdownOption name="Desenvolvedores" content={Developers} backgroundHeight={167} />
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company} backgroundHeight={215} />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>

    </DropdownProvider>
  );
}

export default NavBar;
