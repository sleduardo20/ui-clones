import React from 'react';

import Feed from '../Feed';
import fotoPerfil from '../../assets/perfil-01.jpg';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src={fotoPerfil} alt="Foto Perfil" />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Eduardo Sousa</h1>
        <h2>@sleduardo20</h2>

        <p>Front End Developer</p>

        <ul>
          <li>
            <LocationIcon />
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de Fevereiro de 1991
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>220</strong>
          </span>
          <span>
            <strong>187</strong> seguidores
          </span>
        </Followage>

        <Feed />
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
