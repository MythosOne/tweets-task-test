import styled from '@emotion/styled';
import '@fontsource/montserrat';
import background from '../../img/bgtweets.png';

export const Container = styled.div`
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  height: 268px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 76px;
  height: 22px;

  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ImageBackground = styled.div`
  width: 308px;
  height: 168px;

  position: relative;
  margin: 0 auto;
  margin-top: 28px;

  background-image: url(${background});
  background-size: cover;
`;

export const ImageAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  position: absolute;
  margin-left: 150px;
  margin-top: 178px;

  background: #5736a3;
`;

export const AvatarBorder = styled.img`

  position: absolute;
  z-index: 2;

  margin-top: 10px;
`;

export const Image = styled.img`
  width: 62px;

  border-radius: 50%;

  position: absolute;
  z-index: 1;
`;

export const Border = styled.div`
  margin-top: 15px;

  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const List = styled.ul`
  margin-top: 62px;
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: none;
  gap: 16px;

  margin-bottom: 26px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const ListItem = styled.li`
  text-align: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

const setButtonColor = props => {
  if (props.state) {
    return '#5CD3A8';
  }
  return '#EBD8FF';
};

const setHoverColor = props => {
  if (props.state) {
    return '#96E2C7';
  }
  return '#F2E5FF';
};

export const Button = styled.button`
  width: 196px;
  height: 50px;

  margin-bottom: 26px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  cursor: pointer;

  color: #373737;

  background: ${setButtonColor};

  &:hover {
    background: ${setHoverColor};
  }
`;
