import React from 'react';

import {
  Container,
  Retweeter,
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetwetterIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeter>
        <RocketSeatIcon />
        Você retweetou
      </Retweeter>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@rocketSeat</span>
            <Dot />
            <time> 12 de jul</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <ComentIcon />
              212
            </Status>
            <Status>
              <RetwetterIcon />
              122
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
