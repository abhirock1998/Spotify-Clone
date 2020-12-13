import styled from "styled-components/macro";
import styles from "styled-components/macro";

export const SignContainer = styles.div`
width:37%;
display:flex;
flex-direction:column;
margin: 0 auto;
padding:5% 0;
align-items:center;
justify-content:center;
`;

export const LogoImage = styles.img`
width:200px;
img {
    filter: brightness(1) invert(1);

  }

`;

export const Heading = styles.h1`
text-align: center;
line-height: 36px;
font-weight:700;
`;

export const HorizontalDivider = styles.hr`
width:300px;
margin:20px 0;
`;

export const Label = styled.label``;

export const InputArea = styles.input`
font-size: 14px;
font-weight: 400;
outline:none;
margin-top:4px;
display:flex;
border:1px solid grey;
line-height: 40px;
letter-spacing: 0.25px;
padding:0 5px;
border-radius:5px;
background-color: rgb(255, 255, 255);
color: rgb(24, 24, 24);
`;

export const Container = styled.div`
  margin: 10px 0;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DOB=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

}

`;

export const Date=styled.div`
display:flex;
width:100px;
object-fit:contain;



`;