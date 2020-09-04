import React from 'react';

import logo from '../../assets/logo.svg';
import ray from '../../assets/flash.svg';

import {
  Container,
  Content,
  TopLeft,
  Logo,
  LocationProfile,
  LocaitionIcon,
  TopCenter,
  Search,
  SearchIcon,
  NavBar,
  Options,
  ArrowDownIcon,
  TopRight,
  RayIcon,
  MenuProfile,
  Profile,
  AvatarIcon,
  Shopping,
  Favorites,
  NotificationIcon,
  CarIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <TopLeft>
          <Logo>
            <img src={logo} alt="Logo Mercado Livre" />
          </Logo>

          <LocationProfile>
            <LocaitionIcon />
            <div>
              <span>Enviar para Eduardo</span>
              <span>Rua Madrid 964</span>
            </div>
          </LocationProfile>
        </TopLeft>

        <TopCenter>
          <Search>
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
            />
            <div>
              <SearchIcon />
            </div>
          </Search>

          <NavBar>
            <Options>
              <li>
                <span>Categorias</span> <ArrowDownIcon />
              </li>
              <li>
                <span>Ofertas do dia</span>
              </li>
              <li>
                <span>Histórico</span>
              </li>
              <li>
                <span>Supermercado</span>
              </li>
              <li>
                <span>Lojas oficiais</span>
              </li>
              <li>
                <span>Vender</span>
              </li>
              <li>
                <span>Contato</span>
              </li>
            </Options>
          </NavBar>
        </TopCenter>

        <TopRight>
          <h2>
            <RayIcon>
              <img src={ray} alt="Ray" />
            </RayIcon>
            Aproveite preços incríveis todos os dias
          </h2>
          <MenuProfile>
            <Profile>
              <AvatarIcon />
              <strong>Eduardo</strong>
              <ArrowDownIcon />
            </Profile>

            <Shopping>
              <strong>Compras</strong>
            </Shopping>

            <Favorites>
              <strong>Favoritos</strong>
              <ArrowDownIcon />
            </Favorites>
            <NotificationIcon />
            <CarIcon />
          </MenuProfile>
        </TopRight>
      </Content>
    </Container>
  );
};

export default Header;
