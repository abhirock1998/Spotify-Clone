import styled from "styled-components/macro";

export const SongContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: left;

  color: #fff;
  padding: 10px;

  &:hover {
    transition: 0.2s color ease-in-out;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &:last-of-type {
    margin-bottom: 75px;
  }
`;

export const Index = styled.strong`
 
`;

export const AlbumCover = styled.div`
  width: 40px;
  height: 40px;
  flex: 0.1;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
export const Details = styled.div`
  display: flex;

  flex: 0.5;
  align-items: center;

  img {
    width: 100%;
    max-width: 80px;
    height: 60px;
    object-fit: contain;
  }
  h1 {
    font-size: 16px;
    text-align: left;
    @media screen and (max-width:768px){
      font-size: 13px;
    }
  }
  p {
    font-size: 13px;
    margin-top: 3px;
    color: gray;
    @media screen and (max-width:768px){
      font-size: 10px;
    }
    
  }
  small {
    display: none;
  }
  @media screen and (max-width:768px){
    flex:1;
  }
`;

export const AlbumTitle = styled.div`
  color: #b3b3b3;
  flex: 0.2;
  display: flex;

  &:hover {
    cursor: pointer;
    border-bottom: 0.5px solid #fff;
    width: 100%;
  }
  @media screen and (max-width:768px){
   display:none;
  }
`;

export const Date = styled.div`
  flex: 0.1;
  display: flex;
  font-size: 12px;
  @media screen and (max-width:768px){
    font-size: 10px;

  }
`;

export const Length = styled.div`
  flex: 0.1;
  display: flex;
  @media screen and (max-width:768px){
    font-size: 10px;
    padding:5px;
  }
`;
