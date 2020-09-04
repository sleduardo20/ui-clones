import React from 'react';
import StickBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Davi Lucca" nickname="@lucca11" />,
              <FollowSuggestion name="Laura Lima" nickname="@laurinhalas" />,
              <FollowSuggestion name="Eduardo Lima" nickname="@sleduardo" />,
            ]}
          />

          <List
            title="Clone do Twitter"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Clone do Twitter"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Clone do Twitter"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
