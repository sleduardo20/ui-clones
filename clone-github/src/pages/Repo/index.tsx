import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link to="/sleduardo20" className="username">
          sleduardo20
        </Link>
        <span>/</span>
        <Link className="reponame" to="/sleduardo20/foody">
          foody
        </Link>
      </Breadcrumb>

      <p>Projeto foodFy do LaunchBase</p>

      <Stats>
        <li>
          <StarIcon />
          <b>5</b>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
        </li>
      </Stats>

      <LinkButton href="https://github.com/sleduardo20/front-end-Gobarber">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
