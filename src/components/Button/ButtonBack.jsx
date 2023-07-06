import React from "react";
import { ButtonBackStyle } from "./Button.styled";

export const ButtonBack = ({ onClick }) => {
  return (
    <ButtonBackStyle onClick={onClick}>
      Back
    </ButtonBackStyle>
  );
};

export default ButtonBack;