import styled from "styled-components/macro";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px;
  justify-content: space-between;
  @media screen and (max-width:768px){
    flex-wrap:wrap;
  
  }
`;
export const MainArea = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
`;
export const Column = styled.div`
  flex: 0.2;
  background: #040404;

  padding: 0px 10px;
  min-width: 230px;
  height: 100vh;

  img {
    height: 40px;
    margin-top: 10px;
    margin-right: auto;
    margin-left: 20px;
    object-fit: contain;
    padding: 10px;
    filter: brightness(10) invert(0);
  }
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SideLinks = styled.a`
  color: grey;
  cursor: pointer;
  height: 40px;
  transition: 200ms color ease-in-out;
  align-items: center;
  display: flex;
  margin-left: ${({ icon }) => (icon ? "0px" : "10px")};

  span {
    margin-right: 10px;
  }

  &:hover {
    color: #fff;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

export const Tilte = styled.strong`
  padding: 5px;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const BodyContent = styled.div`
  flex: 0.8;
  padding: 30px;
  overflow-y: overlay;
  background: linear-gradient(rgb(91, 87, 117), rgba(0, 0, 0, 1));
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BottomBar = styled.div`
  flex: 1;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 97%;
  height: 65px;
  padding: 20px;
  background: #282828;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.3;
  
  color: #fff;
  width: 300px;
  justify-content: space-between;
  p {
    margin: 1px;
    padding: 0;
  }
`;

export const AlbumCover = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  margin-right: 10px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Songinfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  //align-items:center;
  justify-content: center;
`;

export const SongTitle = styled.div`
  margin-bottom: 10px;

`;
export const SongArtistname = styled.div`
  font-size: 12px;
 
`;

export const Center = styled.div`
  flex: 0.4;
  max-width: 300px;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export const CenterIcons = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
  justify-content:space-between;
  &:last-of-type {
    color: #1ed15e;
  }
  &:first-of-type {
    color: #1ed15e;
  }
  &:first-of-type:hover,
  &:last-of-type:hover,
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Right = styled.div`
  flex: 0.3;
  align-items: center;
  display: flex;
  color: #fff;
  justify-content: space-between;
  width: 300px;

  & .MuiSlider-root {
    color: white;
   
  }

  @media screen and (max-width: 768px) {
    & .MuiSlider-root {
      width: 80px;
    }
  }
`;

export const IconAdd = styled.div`
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  padding: 4px;
  margin-right: 8px;
  display: flex;
  color: #000;
  &:hover {
    background: #fff;
  }
`;

export const FavouriteIcon = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(rgb(110, 85, 236), rgb(177, 204, 222));
  padding: 4px;
  margin-right: 8px;
  color: #fff;
`;


export const Audio=styled.div`
display:flex;
align-items:center;
justify-content:center;
@media screen and (max-width:768px){
  max-width:150px;
}

`;


export const Rock=styled.audio`
height:30px;
margin-top:10px;


`;