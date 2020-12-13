import styled from "styled-components/macro";

export const FooterBigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #000;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
`;
export const Wrapper = styled.div`
  padding: 100px 50px;

  @media screen and (max-width:768px){
    padding-top:50px;
  }

`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  h5 {
    color: #919496;
    font-weight: 400;
    margin-bottom:10px;
  }
  img {
    margin-top: 10px;
    width: 150px;
    filter: brightness(10) invert(0);
  }
  @media screen and (max-width: 768px) {
   height:100px;
  }
`;

export const Options = styled.a`
  padding-bottom: 15px;
  cursor: pointer;
  transition: 0.2s;
  margin: 2px 0px;
  &:hover {
    color: #1ed760;
  }
`;

export const WrapperOficons = styled.div`
  display: flex;
  flex-direction: reverse-row;
  justify-content: space-between;
 
`;

export const Icons = styled.a`
  background: #222326;
  margin: 0px 5px;
  padding: 7px 15px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;
  img {
    width: 20px;

    object-fit: contain;
  }
  &:hover {
    background: #1ed760;
  }
`;

export const Legal = styled.div`
  display: flex;

  background: #000;
  color: #919496;
  align-items: center;
  padding: 0px 150px;
  justify-content: space-between;
`;
export const Bottom = styled.div`
  padding: 20px 10px;
  
  justify-content:center;
`;

export const LinksOption = styled.a`
  font-size: 12px;
  padding: 1em 0;
  margin: 0px 10px;
  cursor: pointer;

  img {
    width: 27px;
    margin-left: 6px;
  }

  &:hover {
    color: #1ed760;
  }

  span {
    pointer-events: none;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
