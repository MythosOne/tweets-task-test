import React from "react";
import { ButtonLoadMore } from "./Button.styled";

export const ButtonLoad = ({ onClick }) => {
  return (
    <ButtonLoadMore onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};

export default ButtonLoad;