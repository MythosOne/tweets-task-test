import React from "react";
import TweetsCard from "../TweetsCard/TweetsCard";
import { Container } from "./TweetsList.styled";

export const TweetList = ({ cards }) => {
  return (
    <Container>
      {cards.map((card) => (
        <li key={card.id}>
          <TweetsCard followercard={card} />
        </li>
      ))}
    </Container>
  );
};
