import styled from "styled-components/macro";

export const BodyWrapper = styled.div`
  background: url("/images/back.svg") #2d46b9;
  background-size: 103%;
  background-position: right 40% center;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 33px;
  padding-bottom:20px;
  transition: all 0.5s;
  margin:-left:-7%;
  @media screen and (max-width: 768px) {
    background: url("/images/mobile-background.svg") #2d46b9;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 34px;

  h1 {
 
    color: #1ed760;
    font-size: 155px;
    
    margin: 0.5em 0 0.25em;

    line-height: 1;
    text-align: center;
    letter-spacing: -0.01rem !important;
  }

  h1 > span {
    margin-right: -20%;
   padding-top:20px;
  }
  @media screen and (max-width: 1000px) {
    h1{
      font-size:120px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
    h1 > span {
      margin-right: 0;
    }
  }
`;
export const SmallTitle = styled.div`
  margin: 10px 0px;
  p {
    font-size: 20px;
    color: #1ed760;
  }

@media screen and (max-width:768px){
  p{
    font-size: 14px;
  }
}


`;
export const LoginButton = styled.div`
  margin: 30px;
  display: flex;
  border-radius: 70px;
  background: #1ed760;
  padding: 15px 25px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  a {
    color: #2d46b9;
    text-decoration: none;
  }

  &:hover {
    background: #fff;
  }
`;
