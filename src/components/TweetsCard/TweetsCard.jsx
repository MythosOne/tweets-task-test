import React from "react";
import { useState } from "react";
import {
  Container,
  ContainerImg,
  ContainerCard,
  ImageLogo,
  ImageAvatar,
  ImageEmoji,
  List,
  ListItem,
  ImageBorder
} from "./TweetCard.styled";
import logo from "../../img/logo.png";
import bgtweets from "../../img/bgtweets.png";
import avatar from "../../img/avatar.png";
import border from "../../img/border.png";

function TweetsCard({ followercard }) {

  const [buttonState, setButtonState] = useState(false);
  const [value, setValue] = useState(followercard.followers);

  const buttonStyle = {
    width: "196px",
    height: "50px",

    marginBottom: "26px",

    background: "#EBD8FF",
    boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
    borderRadius: "10.3108px",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",

    textTransform: "uppercase",

    color: "#373737",
  };

  return (
    <Container>
      <ContainerImg>
        <ImageLogo src={logo} alt="logo" />
        <ImageEmoji src={bgtweets} alt="emoji" />
        <ImageAvatar src={avatar} alt="avatar" />
        <ImageBorder src={border} alt="border" />
      </ContainerImg>
        <ContainerCard>
          <List>
          <ListItem>{followercard.user}</ListItem>
            <ListItem>{followercard.tweets} TWEETS</ListItem>
            <ListItem>{value} FOLLOWERS</ListItem>
          </List>
          <button
            type="button"
            name="follow"
            style={
              buttonState
                ? { ...buttonStyle, background: "#5CD3A8" }
                : { ...buttonStyle, background: "#EBD8FF " }
            }
            onClick={() => {
              setButtonState((prevState) => !prevState);
              !buttonState ? setValue(Number(value) + 1) : setValue(Number(value) - 1);
            }}
          >
            {!buttonState ? "FOLLOW" : "FOLLOWING"}
          </button>
        </ContainerCard>
    </Container>
  );
}

export default TweetsCard;
