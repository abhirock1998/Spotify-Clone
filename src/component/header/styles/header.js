import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;

  background: black;
  height: 80px;

  z-index: 10;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;
export const SpotifyLogoContainer = styled.div`
  width: 100px;
`;
export const SpotifyImage = styled.img`
  width: 100%;
`;
export const Option = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 15px;

  span:hover {
    color: #1ed760;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuOptionChoice = styled.div`
  padding: 0 20px;
`;

export const MenuImage = styled.button`
  border: none;
  outline: none;
  background: #000;
  cursor: pointer;
  width: 50px;
  display: none;
  img {
    filter: brightness(4) invert(1);
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 25px;
  }
`;
