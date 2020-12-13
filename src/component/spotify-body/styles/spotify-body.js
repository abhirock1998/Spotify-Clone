import styled from "styled-components/macro";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const Left = styled.div`
  background: #fff;
  color: gray;
  flex: 0.5;
  min-width: 70px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  input {
    border: none;
    width: 100%;
    outline:none;
  }

`;
export const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-left: 10px;
  }
`;

export const WeekContainer = styled.div`
  display: flex;

  align-items: flex-end;
`;
export const WeekImageBox = styled.div`
  img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;
export const WeeklyRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight:bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }

  span > small > .MuiSvgIcon-root {
    align-items: flex-end;
    font-size: 0.5rem;
  }
`;

export const PlaylistDisplayer = styled.div`
  display: flex;
  //margin:20px -30px;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-start;
`;
export const Option = styled.div`
  display: flex;
text-align:center;
  align-items: center;
  & .MuiSvgIcon-root {
    margin:0px 20px;
    font-size:40px;
  }
  
  span > .MuiSvgIcon-root {
  
    font-size: 80px;

    align-items: center;
  }
  span > .MuiSvgIcon-root:hover {
      transition:0.1s transform ease-in;
      transform:scale(1.08);
  }

`;
export const ListSong = styled.div`
display:flex;
align-items:center;
font-size:16px;
color:#b3b3b3;
font-weight:500;
`;


export const One=styled.div`
flex:0.1


`;


export const Two=styled.div`
flex:0.5;
@media screen and (max-width:768px){
 flex:1;
}

`;

export const Three=styled.div`
flex:0.1;
text-align:center;
@media screen and (max-width:768px){
 display:none;
}
`;

export const Four=styled.div`
flex:0.2;
text-align:center;
@media screen and (max-width:768px){
  font-size: 12px;
}
`;

export const Five=styled.div`
flex:0.1;
@media screen and (max-width:768px){
  padding:5px;
}
`;

