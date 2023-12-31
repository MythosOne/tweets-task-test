import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  ContainerImg,
  ContainerCard,
  ImageLogo,
  ImageAvatar,
  ImageBackground,
  List,
  ListItem,
  Border,
  AvatarBorder,
  Button,
  Image,
} from './TweetCard.styled';
import logo from '../../img/logo.png';
import border from '../../img/border.png';

function TweetsCard({ followercard }) {
  const [buttonState, setButtonState] = useState(false);
  const [value, setValue] = useState(followercard.followers);

  // const [cardState, setCardState] = useState([]);
  
  useEffect(() => {
  
      localStorage.setItem('cardstate', JSON.stringify(followercard.id));

  }, [followercard.id, buttonState])

  return (
    <Container>
      <ContainerImg>
        <ImageLogo src={logo} alt="logo" />
        <ImageBackground />
        <ImageAvatar>
          <AvatarBorder src={border} alt="border" />
          <Image src={followercard.avatar} alt="avatar" />
        </ImageAvatar>
        <Border />
      </ContainerImg>
      <ContainerCard>
        <List>
          <ListItem>{followercard.user}</ListItem>
          <ListItem>{followercard.tweets} TWEETS</ListItem>
          <ListItem>{value} FOLLOWERS</ListItem>
        </List>
        <Button
          type="button"
          name="follow"
          state={buttonState}
          onClick={() => {
            setButtonState(prevState => !prevState);
            !buttonState
              ? setValue(Number(value) + 1)
              : setValue(Number(value) - 1);
          }}
        >
          {!buttonState ? 'FOLLOW' : 'FOLLOWING'}
        </Button>
      </ContainerCard>
    </Container>
  );
}

export default TweetsCard;
