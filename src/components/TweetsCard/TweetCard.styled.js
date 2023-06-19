import styled from "@emotion/styled";
import "@fontsource/montserrat";

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

  height: 214px;
`;

export const ContainerCard = styled.div`
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

export const ImageEmoji = styled.img`
  width: 308px;
  height: 168px;

  position: relative;
  margin: 0 auto;
  margin-top: 28px;
`;

export const ImageAvatar = styled.img`
  width: 80px;
  height: 80px;

  position: absolute;

  margin-left: 150px;
  margin-top: 178px;
`;

export const ImageBorder = styled.img`
margin-top: 15px;
`;

export const List = styled.ul`
  margin-top: 62px;
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: none;
  gap: 16px;

  margin-bottom: 26px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const ListItem = styled.li`
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
