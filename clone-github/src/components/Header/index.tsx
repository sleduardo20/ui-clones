import React, { useState, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { Container, GithubLogo, SearchForm } from './styles';
import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }, [themeName, setThemeName]);

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username or Repo ..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
