import React from 'react';
import { useState } from 'react';
import {
  Container,
  ContainerImg,
  ContainerCard,
  ImageLogo,
  ImageAvatar,
  ImageBackground,
  List,
  ListItem,
  ImageBorder,
  Button,
} from './TweetCard.styled';
import logo from '../../img/logo.png';
import avatar from '../../img/avatar.png';
import border from '../../img/border.png';

function TweetsCard({ followercard }) {
  const [buttonState, setButtonState] = useState(false);
  const [value, setValue] = useState(followercard.followers);

  // const [cardState, setCardState] = useState([]);
  // useEffect(() => {
    
  //     localStorage.setItem('cardstate', JSON.stringify({value, buttonState}));
    
  // }, [value, buttonState])


  return (
    <Container>
      <ContainerImg>
        <ImageLogo src={logo} alt="logo" />
        <ImageBackground/>
        <ImageAvatar src={avatar} alt="avatar" />
        <ImageBorder src={border} alt="border" />
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
